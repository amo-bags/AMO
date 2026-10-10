const product = {
  id: "40",
  name: "حقيبة AMO #40",
  price: 10,
  size: "وسط",
  dimensions: "العرض 30 سم × الارتفاع 20 سم",
  image: "40bagi.png",
  gallery: [
    "40bagi.png",
    "40kaki.png",
    "40white.png",
    "40backside.png",
    "40side.png",
    "image-19_197705906995413.jpg"
  ],
  colors: [
    {
      name: "بيج",
      value: "#d3b89c",
      image: "40bagi.png"
    },
    {
      name: "كاكي",
      value: "#c3b091",
      image: "40kaki.png"
    },
    {
      name: "أبيض",
      value: "#ffffff",
      image: "40white.png"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
  window.AMO_PRODUCTS.push(product);
}
