import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";

function App() {
  return (
    // <div className="h-100 bg-primary">
    //   <Navigation></Navigation>
    //   <Home></Home>
    // </div>
    <>
      <Navigation></Navigation>

      <Home></Home>
    </>
  );
}

export default App;
