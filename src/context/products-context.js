import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default function ProductsProvider({ children }) {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  function toggleFavorite(id) {
    setProductsList((prevProductsList) => {
      // const prodIndex = prevProductsList.findIndex((p) => p.id === id);
      // const newFavStatus = !prevProductsList[prodIndex].isFavorite;
      // const updatedProducts = [...prevProductsList];
      // updatedProducts[prodIndex] = {
      //   ...prevProductsList[prodIndex],
      //   isFavorite: newFavStatus,
      // };
      // return updatedProducts;

      return prevProductsList.map((p) => {
        if (p.id === id) {
          return { ...p, isFavorite: !p.isFavorite };
        }
        return p;
      });
    });
  }

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
