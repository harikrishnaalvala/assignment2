import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import CreateCharacter from "./components/CreateCharacter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route exact path="/create-character" component={CreateCharacter} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
