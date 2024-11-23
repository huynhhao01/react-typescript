import { useRef, useState } from "react";
import Input from "../components/Input";

const Login = () => {
  // const usernameRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);

  const inputRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const onHandleChange = (type: string, e: any) => {
  //   setFormData({
  //     ...formData,
  //     [type]: e.target.value,
  //   });
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // if (usernameRef.current) {
    //   const username = usernameRef.current.value;
    //   console.log(username);
    // }
    // if (passwordRef.current) {
    //   console.log(passwordRef.current.value);
    // }

    console.log("inputRef", inputRef);
    if (inputRef.current?.username) {
      const username = inputRef.current?.username.value;
      console.log(username);
    }
    if (inputRef.current?.password) {
      const password = inputRef.current?.password.value;
      console.log(password);
    }
  };

  console.log("render form");
  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputKey="username"
        label="Username"
        // value={formData.username}
        // onChange={onHandleChange}
        ref={(element) => (inputRef.current["username"] = element)}
        defaultValue={""}
      />
      <Input
        inputKey="password"
        label="Password"
        // value={formData.password}
        // onChange={onHandleChange}
        type="password"
        ref={(element) => (inputRef.current["password"] = element)}
        defaultValue={""}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
