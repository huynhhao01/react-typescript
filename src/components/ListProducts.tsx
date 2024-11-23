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
    console.log("did mount");
    if (count > 5) {
      listproducts.push({
        id: 6,
        name: "Long Sleeve Shirt 2",
        price: 110000,
      });
    }
    const timeFn = setTimeout(() => {
      console.log('hello');
    }, 2000);
    return () => {
      console.log('will unmount');
      clearTimeout(timeFn);
    }
  }, [count, listproducts]); // did mount
  // did mount: []
  // did update: [dependencies]
  // will unmount: clear resistor item in component

  const onClickItem = (id: number) => {
    const itemIdx = listproducts.findIndex((item) => item?.id === id);
    const newList = [...listproducts];
    // const [clickedItem] = newList.splice(itemIdx, 1);
    // setListproducts([clickedItem, ...newList]);

    newList[itemIdx].price += 1000;
    setListproducts(newList);
  };

  // const sumValue = heavyCompute(); // will slow increase - did mount
  // const sumValue = useMemo(() => heavyCompute(), []);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleIncrease}>Increase {count}</button>
      {/* <h2>{sumValue}</h2> */}
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
