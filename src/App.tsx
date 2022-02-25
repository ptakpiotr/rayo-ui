import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Team from "./components/Team";
import Standings from "./components/Standings";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { account } from "./features/account";
import Logout from "./components/Logout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      account({
        type: "LOGIN",
        token: sessionStorage.getItem("authToken"),
      })
    );
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Switch>
        <main>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
