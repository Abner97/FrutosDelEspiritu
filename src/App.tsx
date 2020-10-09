import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import FrutosState from "./context/frutos/FrutosState";
import QuestionsState from "./context/questions/QuestionsState";

function App() {
  return (
    <QuestionsState>
      <FrutosState>
        <Navigation />
        <Home />
      </FrutosState>
    </QuestionsState>
  );
}

export default App;
