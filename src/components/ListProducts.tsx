import React, { useEffect, useMemo, useState } from "react";
import { Product } from "../components";

interface ProductModel {
  id: number;
  name: string;
  price: number;
}

const heavyCompute = () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += 1;
  }
  return sum;
};

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

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("did mount will run after finish render and side effect");
    setCount(count + 5);
  }, []); // if set [count] it will loop forever

  const onClickItem = (id: number) => {
    const itemIdx = listproducts.findIndex((item) => item?.id === id);
    const newList = [...listproducts];
    // const [clickedItem] = newList.splice(itemIdx, 1);
    // setListproducts([clickedItem, ...newList]);

    newList[itemIdx].price += 1000;
    setListproducts(newList);
  };

  // const sumValue = heavyCompute(); // will slow increase - did mount
  const sumValue = useMemo(() => heavyCompute(), []);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleIncrease}>Increase {count}</button>
      <h2>{sumValue}</h2>
      {listproducts.map((product: ProductModel, index) => {
        return (
          <Product
            key={index}
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
