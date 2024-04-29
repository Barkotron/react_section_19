import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";

function App() {
  return (
    <>
      <Header></Header>
      <Auth></Auth>
      <Counter />
    </>
  );
}

export default App;
