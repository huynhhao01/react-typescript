import { forwardRef } from "react";

type Props = {
  label: string;
  value?: string;
  inputKey: "username" | "password";
  onChange?: (inputKey: string, e: any) => void;
  type?: string;
  defaultValue?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      value,
      inputKey,
      onChange = () => {},
      type = "text",
      defaultValue,
    }: Props,
    ref
  ) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => onChange(inputKey, e)}
        />
      </div>
    );
  }
);

export default Input;
