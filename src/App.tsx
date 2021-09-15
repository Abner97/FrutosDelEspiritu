import React from "react";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import FrutosState from "./context/frutos/FrutosState";
import QuestionsState from "./context/questions/QuestionsState";
import Routes from "./router/Routes";

function App() {
  return (
    <QuestionsState>
      <FrutosState>
        <AuthState>
          <Routes></Routes>
        </AuthState>
      </FrutosState>
    </QuestionsState>
  );
}

export default App;
