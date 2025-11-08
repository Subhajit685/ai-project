export const phones = [
  // ===== FLAGSHIP PHONES =====
  { id: 1, name: "Samsung Galaxy S24 Ultra", price: 1199, category: "flagship", features: ["200MP camera", "Snapdragon 8 Gen 3", "5000mAh battery", "AMOLED 120Hz", "S Pen support"] },
  { id: 2, name: "Apple iPhone 15 Pro Max", price: 1299, category: "flagship", features: ["A17 Pro chip", "Titanium frame", "ProMotion Display", "48MP main camera", "Dynamic Island"] },
  { id: 3, name: "Google Pixel 8 Pro", price: 999, category: "flagship", features: ["Tensor G3", "50MP camera", "7 years updates", "Super Actua Display", "AI photo tools"] },
  { id: 4, name: "OnePlus 12", price: 899, category: "flagship", features: ["Snapdragon 8 Gen 3", "120W charging", "Hasselblad camera", "AMOLED LTPO", "5000mAh battery"] },
  { id: 5, name: "Xiaomi 14 Ultra", price: 999, category: "flagship", features: ["Leica optics", "1-inch sensor", "90W wired charging", "Snapdragon 8 Gen 3", "2K AMOLED"] },
  { id: 6, name: "Asus Zenfone 10", price: 749, category: "flagship", features: ["Compact design", "Snapdragon 8 Gen 2", "120Hz AMOLED", "IP68", "Wireless charging"] },
  { id: 7, name: "Vivo X100 Pro", price: 950, category: "flagship", features: ["MediaTek Dimensity 9300", "Zeiss optics", "100W fast charging", "2K AMOLED", "AI night mode"] },
  { id: 8, name: "Oppo Find X7 Ultra", price: 999, category: "flagship", features: ["Hasselblad camera", "1-inch sensor", "Snapdragon 8 Gen 3", "WQHD+ display", "100W charging"] },
  { id: 9, name: "Honor Magic 6 Pro", price: 899, category: "flagship", features: ["Snapdragon 8 Gen 3", "MagicOS", "50MP triple camera", "2K display", "5100mAh battery"] },
  { id: 10, name: "Realme GT5 Pro", price: 699, category: "flagship", features: ["Snapdragon 8 Gen 3", "144Hz display", "5400mAh battery", "100W charging", "50MP Sony sensor"] },

  // ===== MIDRANGE PHONES =====
  { id: 11, name: "Samsung Galaxy A55", price: 449, category: "midrange", features: ["Exynos 1480", "120Hz AMOLED", "5000mAh battery", "Gorilla Glass Victus"] },
  { id: 12, name: "Redmi Note 13 Pro+", price: 399, category: "midrange", features: ["200MP camera", "Dimensity 7200-Ultra", "120Hz curved display", "67W charging"] },
  { id: 13, name: "Realme 12 Pro+", price: 349, category: "midrange", features: ["Periscope lens", "Snapdragon 7s Gen 2", "Curved AMOLED", "67W charging"] },
  { id: 14, name: "iQOO Neo 9 Pro", price: 499, category: "midrange", features: ["Snapdragon 8 Gen 2", "120W charging", "Gaming performance", "144Hz AMOLED"] },
  { id: 15, name: "OnePlus Nord 3", price: 429, category: "midrange", features: ["Dimensity 9000", "80W SuperVOOC", "AMOLED 120Hz", "Sony IMX890 camera"] },
  { id: 16, name: "Poco X6 Pro", price: 379, category: "midrange", features: ["Dimensity 8300-Ultra", "120Hz AMOLED", "67W charging", "5000mAh battery"] },
  { id: 17, name: "Motorola Edge 50 Fusion", price: 449, category: "midrange", features: ["Snapdragon 7s Gen 2", "Curved pOLED", "68W charging", "50MP main sensor"] },
  { id: 18, name: "Vivo V30", price: 399, category: "midrange", features: ["Snapdragon 7 Gen 3", "AMOLED 120Hz", "Aura light camera", "5000mAh battery"] },
  { id: 19, name: "Honor X9b", price: 349, category: "midrange", features: ["Snapdragon 6 Gen 1", "AMOLED display", "5100mAh battery", "Durable build"] },
  { id: 20, name: "Nothing Phone (2a)", price: 399, category: "midrange", features: ["Dimensity 7200 Pro", "Glyph Interface", "AMOLED 120Hz", "5000mAh battery"] },

  // ===== BUDGET PHONES =====
  { id: 21, name: "Redmi Note 13 5G", price: 249, category: "budget", features: ["Dimensity 6100+", "90Hz AMOLED", "5000mAh battery", "33W charging"] },
  { id: 22, name: "Samsung Galaxy M14", price: 199, category: "budget", features: ["Exynos 1330", "90Hz LCD", "6000mAh battery", "50MP camera"] },
  { id: 23, name: "Realme Narzo 70", price: 229, category: "budget", features: ["Helio G99", "AMOLED display", "5000mAh battery", "33W SuperVOOC"] },
  { id: 24, name: "Poco M6 Pro", price: 219, category: "budget", features: ["Snapdragon 4 Gen 2", "90Hz display", "5000mAh battery", "18W charging"] },
  { id: 25, name: "Infinix Note 30 5G", price: 239, category: "budget", features: ["Dimensity 6080", "120Hz display", "108MP camera", "45W charging"] },
  { id: 26, name: "Lava Agni 2 5G", price: 249, category: "budget", features: ["Dimensity 7050", "3D curved AMOLED", "66W charging", "50MP camera"] },
  { id: 27, name: "Tecno Camon 30", price: 229, category: "budget", features: ["Helio G99 Ultimate", "AMOLED 120Hz", "5000mAh battery", "33W charging"] },
  { id: 28, name: "Moto G73 5G", price: 249, category: "budget", features: ["Dimensity 930", "120Hz LCD", "50MP OIS camera", "5000mAh battery"] },
  { id: 29, name: "Redmi 13C", price: 159, category: "budget", features: ["Helio G85", "90Hz display", "5000mAh battery", "Fingerprint sensor"] },
  { id: 30, name: "Infinix Zero 30", price: 299, category: "budget", features: ["120Hz AMOLED", "108MP camera", "5000mAh battery", "67W charging"] },

  // ===== GAMING PHONES =====
  { id: 31, name: "Asus ROG Phone 8 Pro", price: 1099, category: "gaming", features: ["Snapdragon 8 Gen 3", "165Hz AMOLED", "AirTrigger controls", "6000mAh battery"] },
  { id: 32, name: "RedMagic 9 Pro", price: 999, category: "gaming", features: ["Snapdragon 8 Gen 3", "Active cooling fan", "165Hz AMOLED", "Fast touch response"] },
  { id: 33, name: "iQOO 12", price: 699, category: "gaming", features: ["Snapdragon 8 Gen 3", "144Hz AMOLED", "120W fast charging", "V3 chip"] },
  { id: 34, name: "Poco F6 Pro", price: 549, category: "gaming", features: ["Snapdragon 8 Gen 2", "120Hz AMOLED", "67W charging", "Gaming optimization"] },
  { id: 35, name: "Black Shark 6", price: 799, category: "gaming", features: ["Snapdragon 8 Gen 2", "Gaming triggers", "AMOLED 144Hz", "5000mAh battery"] },
  { id: 36, name: "Realme GT Neo 5", price: 499, category: "gaming", features: ["240W charging", "Snapdragon 8+ Gen 1", "RGB lighting", "Gaming mode"] },
  { id: 37, name: "Infinix GT 20 Pro", price: 399, category: "gaming", features: ["Dimensity 8200", "144Hz AMOLED", "Dual speaker", "Gaming design"] },
  { id: 38, name: "Redmi K70 Pro", price: 649, category: "gaming", features: ["Snapdragon 8 Gen 3", "120Hz OLED", "5000mAh battery", "120W charging"] },
  { id: 39, name: "Lenovo Legion Y90", price: 899, category: "gaming", features: ["Dual fan cooling", "144Hz AMOLED", "Snapdragon 8 Gen 1", "RGB backlight"] },
  { id: 40, name: "ZTE Nubia Neo 5G", price: 299, category: "gaming", features: ["Unisoc T820", "Gaming aesthetics", "120Hz display", "4500mAh battery"] },

  // ===== MIDRANGE EXTENDED =====
  { id: 41, name: "Vivo T3 5G", price: 349, category: "midrange", features: ["Dimensity 7200", "AMOLED 120Hz", "5000mAh battery", "44W charging"] },
  { id: 42, name: "OnePlus Nord CE 4", price: 349, category: "midrange", features: ["Snapdragon 7 Gen 3", "80W fast charging", "AMOLED 120Hz"] },
  { id: 43, name: "Oppo F25 Pro", price: 329, category: "midrange", features: ["Dimensity 7050", "Curved AMOLED", "67W charging"] },
  { id: 44, name: "Samsung Galaxy F55", price: 399, category: "midrange", features: ["Snapdragon 7 Gen 1", "AMOLED display", "5000mAh battery"] },
  { id: 45, name: "Motorola G84 5G", price: 299, category: "midrange", features: ["Snapdragon 695", "pOLED 120Hz", "5000mAh battery"] },
  { id: 46, name: "Infinix Zero Ultra", price: 329, category: "midrange", features: ["180W fast charging", "200MP camera", "Curved AMOLED"] },
  { id: 47, name: "Poco X5 Pro", price: 319, category: "midrange", features: ["Snapdragon 778G", "120Hz AMOLED", "67W charging"] },
  { id: 48, name: "Realme 11 Pro+", price: 349, category: "midrange", features: ["Curved AMOLED", "200MP camera", "Dimensity 7050"] },
  { id: 49, name: "Honor 90", price: 499, category: "midrange", features: ["200MP camera", "Snapdragon 7 Gen 1", "120Hz AMOLED"] },
  { id: 50, name: "Xiaomi 13T", price: 599, category: "midrange", features: ["Dimensity 8200 Ultra", "Leica camera", "67W charging"] },

  // ===== CONTINUE 51–100 =====
  ...Array.from({ length: 50 }, (_, i) => ({
    id: i + 51,
    name: `Generic Phone Model ${i + 51}`,
    price: 150 + Math.floor(Math.random() * 1000),
    category: ["budget", "midrange", "flagship", "gaming"][Math.floor(Math.random() * 4)],
    features: [
      "AMOLED display",
      `${4000 + Math.floor(Math.random() * 2000)}mAh battery`,
      `${50 + Math.floor(Math.random() * 100)}MP camera`,
      `${30 + Math.floor(Math.random() * 100)}W fast charging`,
    ],
  })),
];
