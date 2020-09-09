import React from "react";
import "./App.scss";
import { Router } from "@reach/router";

import Dashboard from "./Pages/dashboard";
import Index from './Pages';



function App() {
  return (
    <Router>
      <Index path="/" />
      <Dashboard path="dashboard" />
    </Router>
  );
}

export default App;
