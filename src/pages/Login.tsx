import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onHandleChange = (type: string, e: any) => {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData.username);
    console.log(formData.password);
  };

  console.log("render form");
  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputKey="username"
        label="Username"
        value={formData.username}
        onChange={onHandleChange}
      />
      <Input
        inputKey="password"
        label="Password"
        value={formData.password}
        onChange={onHandleChange}
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
