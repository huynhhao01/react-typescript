import { useRef, useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const state = useSelector(state => state);
  console.log(state);
  
  const navigate = useNavigate();

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

    let usernameVal = "",
      passwordVal = "";
    if (inputRef.current?.username) {
      usernameVal = inputRef.current?.username.value;
    }
    if (inputRef.current?.password) {
      passwordVal = inputRef.current?.password.value;
    }
    if (usernameVal && passwordVal) {
      navigate("/");
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
