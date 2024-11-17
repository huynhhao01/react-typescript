type Props = {
  label: string;
  value: string;
  inputKey: "username" | "password";
  onChange: (inputKey: string, e: any) => void;
  type?: string;
};

const Input = (props: Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(props.inputKey, e)}
      />
    </div>
  );
};

export default Input;
