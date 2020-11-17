import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import RegisterPage from "./pages/register";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";
import CFIPage from "./pages/cfi";
import SummitPage from "./pages/summit";
import PartnersPage from "./pages/partners";
import AboutPage from "./pages/about";
import Success from "./pages/success";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/cfi" component={CFIPage} exact />
        <Route path="/summit" component={SummitPage} exact />
        <Route path="/partners" component={PartnersPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/success" component={Success} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
