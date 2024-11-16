import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState(""); //control component
  const [password, setPassword] = useState(""); //control component

  const handleChange = (type: string, e: any) => {
    if (type === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => handleChange("username", event)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => handleChange("password", event)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
