const products = [
  {
    id: "1",
    name: "Zapatilla Basquet Nike Precision 6",
    price: 120000,
    category: "zapatillas",
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw48acd1b9/products/NIDD9535-002/NIDD9535-002-1.JPG",
    stock: 30,
    description: "Caracteristicas zapatillas",
  },
  {
    id: "2",
    name: "ZAPATILLAS BASQUET HOMBRE UNDER ARMOUR LOCKDOWN 6",
    price: 85000,
    category: "zapatillas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBtmgJpuoefj0ea0HAtvnw-ei-HoS5P081Q&s",
    stock: 26,
    description: "Caracteristicas zapatillas",
  },
  {
    id: "3",
    name: "Camiseta Seleccion Argentina Basquet",
    price: 42500,
    category: "indumentaria",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6_TQNqv-sAK7e9LM4Qv_uut43jNguNJXhQ&s",
    stock: 10,
    description: "Descripcion del producto",
  },
  {
    id: "4",
    name: "Camiseta Oficial NBA Chicago Bulls Jordan",
    price: 66900,
    category: "indumentaria",
    img: "https://http2.mlstatic.com/D_NQ_NP_749550-MLA43719954073_102020-O.webp",
    stock: 23,
    description: "Descripcion de producto",
  },

  {
    id: "5",
    name: "Rodillera protectora larga",
    price: 39700,
    category: "accesorios",
    img: "https://cdnx.jumpseller.com/basketball-boutique/image/5867315/resize/635/635?1657741699",
    stock: 12,
    description: "Descripcion de producto",
  },

  {
    id: "6",
    name: "PELOTA BASQUET N7 MOLTEN BG4500 (OFICIAL) MOLTEN",
    price: 36900,
    category: "accesorios",
    img: "https://www.digitalsport.com.ar/files/products/60f878f3befe0-146540-500x500.jpg",
    stock: 9,
    description: "Descripcion de producto",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
