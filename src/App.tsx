import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import QuestionsState from "./context/questions/QuestionsState";

function App() {
  return (
    // <div className="h-100 bg-primary">
    //   <Navigation></Navigation>
    //   <Home></Home>
    // </div>
    <QuestionsState>
      <Navigation></Navigation>

      <Home></Home>
    </QuestionsState>
  );
}

export default App;
