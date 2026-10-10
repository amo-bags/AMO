const product = {
  id: "33",
  name: "شنطة نسائية - موديل 33",
  price: 15,
  size: "كبير (عرض 31 سم × ارتفاع 21 سم)",
  dimensions: "31 سم × 21 سم",
  image: "33camil.jpg",
  colors: [
    { name: "عسلي", colorName: "عسلي", value: "#c5a059", image: "33camil.jpg" },
    { name: "خمري", colorName: "خمري", value: "#800020", image: "33darkred.jpg" },
    { name: "كاكي", colorName: "كاكي", value: "#8b864e", image: "33kaki.jpg" }
  ],
  gallery: [
    "33details.jpg",
    "33camil.jpg",
    "33darkred.jpg",
    "33kaki.jpg"
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

