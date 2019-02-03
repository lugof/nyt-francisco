import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import TheJumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./pages/Search";
import "./App.css";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <TheJumbotron />
          <Route exact path="/" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
