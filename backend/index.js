import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { phones } from "./phones.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Gemini model
const genAI = new GoogleGenerativeAI("AIzaSyDaJqEv795rgvjPY3NkFpdz4zFtRTIEeCw");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// returns all phone data

app.get("/phones", (req, res) => {
  res.json({ success: true, total: phones.length, data: phones });
});

// AI-based phone recommendation

app.post("/recommend", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Missing 'query' in body." });
    }

    const phoneListText = phones
      .map(
        (p) =>
          `${p.name} - $${p.price}, features: ${p.features.join(
            ", "
          )}, category: ${p.category}`
      )
      .join("\n");

    const prompt = `
You are a phone recommendation AI.
Given the following list of phones and user preferences, select 3–5 phones that best match.
Respond ONLY in structured JSON format:
{
  "recommendations": [
    { "id" : "", "name": "", "price": "", "category": "", "features": [], reason": "" }
  ]
}

User Query: "${query}"
Phones List:
${phoneListText}
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    // console.log(responseText);

    // 🧹 Clean JSON response from AI
    let cleanText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let recommendations;
    try {
      const parsed = JSON.parse(cleanText);

      recommendations = parsed.recommendations;
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.json({
        success: false,
        error: "Could not parse AI response",
        raw: responseText,
      });
    }

    res.json({ success: true, query, recommendations: recommendations });
    // res.json({ success: true, query, cleanText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
