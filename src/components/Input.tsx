type Props = {
  label: string;
  value: string;
  inputKey: "username" | "password";
  onChange: (inputKey: string, e: any) => void;
  type?: string;
};

const Input = ({ label, value, inputKey, onChange, type = "text" }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(inputKey, e)}
      />
    </div>
  );
};

export default Input;
