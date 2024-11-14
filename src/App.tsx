import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "./components";

interface ProductModel {
  id: number;
  name: string;
  price: number;
}

const products: Array<ProductModel> = [
  {
    id: 1,
    name: "T-shirt",
    price: 20000,
  },
  {
    id: 2,
    name: "Sweater",
    price: 50000,
  },
  {
    id: 3,
    name: "Long Sleeve Shirt",
    price: 120000,
  },
  {
    id: 4,
    name: "Long Sleeve Shirt",
    price: 520000,
  },
  {
    id: 5,
    name: "Long Sleeve Shirt 2",
    price: 110000,
  },
];
function App() {
  const [listproducts, setListproducts] = useState<Array<ProductModel>>(
    products || []
  );

  const onClickItem = (id: number) => {
    const itemIdx = listproducts.findIndex((item) => item?.id === id);
    const newList = [...listproducts];
    newList[itemIdx].price += 10000;
    setListproducts(newList);
  };

  return (
    <div className="App">
      {listproducts.map((product: ProductModel) => {
        if (product.price > 1000) {
          return (
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              onClick={onClickItem}
            />
          );
        }
      })}
    </div>
  );
}

export default App;
