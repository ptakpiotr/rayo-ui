import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Team from "./components/Team";
import Standings from "./components/Standings";

function App() {
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
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
