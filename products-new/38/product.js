
var product = {
  id: "38",
  name: "حقيبة AMO رقم 38",
  price: 10,
  size: "وسط",
  dimensions: "العرض 35 سم × الارتفاع 17 سم",
  image: "38black.png",
  gallery: [
    "38black.png",
    "38offwhite.png",
    "38bagi.png",
    "38nude.png",
    "38details.jpg",
    "38detaols2.jpg",
    "38side.jpg",
    "38down.jpg",
    "38bac.jpg",
    "size38.jpg"
  ],
  colors: [
    {
      name: "أسود",
      value: "#000000",
      image: "38black.png"
    },
    {
      name: "أوفوايت",
      value: "#f5f5ed",
      image: "38offwhite.png"
    },
    {
      name: "بيج",
      value: "#d3b89c",
      image: "38bagi.png"
    },
    {
      name: "نود / فخاري",
      value: "#c18c74",
      image: "38nude.png"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
  window.AMO_PRODUCTS.push(product38);
}
