import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (type: string, e: any) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          defaultValue={"username1"}
          value={formData.username}
          onChange={(event) => handleChange("username", event)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          defaultValue={"password1"}
          value={formData.password}
          onChange={(event) => handleChange("password", event)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
