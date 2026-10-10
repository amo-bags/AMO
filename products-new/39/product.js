const product = {
  id: "39",
  name: "حقيبة AMO #39",
  price: 10,
  size: "كبير",
  dimensions: "العرض 30 سم × الارتفاع 28 سم",
  image: "39blueandwhite.jpg",
  gallery: [
    "39blueandwhite.jpg",
    "391.jpg",
    "392.jpg",
    "393.jpg",
    "394.jpg",
    "395.jpg",
    "396.jpg"
  ],
  colors: [
    {
      name: "أزرق مع أبيض",
      value: "#1e3a8a",
      image: "39blueandwhite.jpg"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
  window.AMO_PRODUCTS.push(product);
}

