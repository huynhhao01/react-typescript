import { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import Login from "./pages/Login";
import { ListProductContext } from "./hooks/context";
import ListPosts from "./pages/ListPosts";

// import Login from "./pages/Login";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle ? (
        <ListProductContext.Provider value={toggle}>
          <ListProducts />
        </ListProductContext.Provider>
      ) : null} */}
      <Login />
      <ListPosts />
    </div>
  );
}

export default App;
