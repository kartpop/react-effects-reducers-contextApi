import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect - When does it run?
  //  -> if no dependencies (not even empty [] brackets), runs every time AFTER the component is reloaded
  //  -> if empty [] brackets for dependencies, runs only once AFTER the component loads for the first time
  //  -> if dependencies provided in [], runs only when the dependencies change AFTER the component is reloaded
  // useEffect cleanup function (check Login.js) - When does it run?
  //  -> runs before every useEffect fn execution - except before first time execution
  //  -> runs after component is unloaded as well

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); // with empty dependencies, will run only once when the app first starts

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
