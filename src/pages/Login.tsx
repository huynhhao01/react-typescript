import { useRef } from "react";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null); // uncontrolled component
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (usernameRef.current) {
      const username = usernameRef.current.value;
      console.log(username);
    }
    if (passwordRef.current) {
      const password = passwordRef.current.value;
      console.log(password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" defaultValue={"username1"} ref={usernameRef} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" defaultValue={"password1"} ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
