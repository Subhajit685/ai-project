import React, { useEffect, useState } from "react";

export default function App() {
  const [phones, setPhones] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommended, setRecommended] = useState(null);

  // Load all phones on mount
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/phones");
      const data = await res.json();
      console.log(data.data);
      setPhones(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  //Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setRecommended(null);

    try {
      const res = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) setRecommended(data.recommendations);
      else alert("AI error: " + (data.error || "Unknown error"));
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
      AI Phone Recommender
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="max-w-xl mx-auto flex items-center gap-2 mb-10"
      >
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Recommended Phones */}
      {recommended ? (
        <div>
          <h2 className="text-2xl font-semibold mb-5 text-center text-green-600">
            Recommended Phones
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((phone, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-1">
                  {phone.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  ${phone.price} • {phone.category}
                </p>
                <ul className="text-sm text-gray-700 mb-3 list-disc ml-4">
                  {phone.features?.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                {phone.reason && (
                  <p className="text-gray-800 text-sm bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    {phone.reason}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setRecommended(null)}
            className="block mx-auto mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
          >
            ← Back to All Phones
          </button>
        </div>
      ) : (
        <>
          {/* All Phones */}
          <h2 className="text-2xl font-semibold mb-5 text-center text-gray-700">
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phones?.map((phone) => (
              <div
                key={phone.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-1">
                  {phone.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  ${phone.price} • {phone.category}
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4">
                  {phone.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
