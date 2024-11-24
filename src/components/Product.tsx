import { memo, useContext, useState } from "react";
import { ListProductContext } from "../hooks/context";

type Props = {
  id: number;
  name: string;
  price?: number;
  onClick?: (id: number) => void;
};

const Product = (props: Props) => {
  console.log("id", props.id);
  
  // not use if unnessary to avoid re-render 
  // const toggleList = useContext(ListProductContext);
  // console.log("toggleList ", toggleList);

  const onClick = () => {
    if (typeof props.onClick === "function") {
      props.onClick(props.id);
    }
  };

  return (
    <button style={{ display: "block" }} onClick={onClick}>
      <h3>{props.name}</h3>
      <i>{props.price}</i>
    </button>
  );
};

export default memo(Product, (prevProps, nextProps) => {
  return prevProps.price === nextProps.price;
});
