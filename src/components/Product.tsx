type Props = {
  id: number;
  name: string;
  price: number;
  onClick?: (id: number) => void;
};

const Product = (props: Props) => {
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

export default Product;
