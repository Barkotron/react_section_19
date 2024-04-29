import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import UserProfile from './components/UserProfile.js'
import { useSelector } from "react-redux";



function App() {

  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header></Header>
      {!authenticated ? <Auth></Auth> : <UserProfile></UserProfile> }
      <Counter />
    </>
  );
}

export default App;
