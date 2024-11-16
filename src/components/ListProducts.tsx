import React, { useState } from "react";
import { Product } from "../components";

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

const ListProducts = () => {
  const [listproducts, setListproducts] = useState<Array<ProductModel>>(
    products || []
  );

  const onClickItem = (id: number) => {
    const itemIdx = listproducts.findIndex((item) => item?.id === id);
    const newList = [...listproducts];
    const [clickedItem] = newList.splice(itemIdx, 1);
    setListproducts([clickedItem, ...newList]);
  };

  return (
    <>
      {listproducts.map((product: ProductModel) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onClick={onClickItem}
          />
        );
      })}
    </>
  );
};

export default ListProducts;
