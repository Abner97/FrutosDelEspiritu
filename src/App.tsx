import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import AuthState from "./context/auth/AuthState";
import FrutosState from "./context/frutos/FrutosState";
import QuestionsState from "./context/questions/QuestionsState";
import Routes from "./router/Routes";

function App() {
  return (
    <QuestionsState>
      <FrutosState>
        <AuthState>
          <Navigation />
          <Routes></Routes>
        </AuthState>
      </FrutosState>
    </QuestionsState>
  );
}

export default App;
