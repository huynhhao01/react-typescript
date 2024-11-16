import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState(""); //control component
  const [password, setPassword] = useState(""); //control component
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
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
          // value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          // value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
