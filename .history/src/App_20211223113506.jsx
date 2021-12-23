import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";


import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Office from "./Pages/Office";
import News from "./Pages/News";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

function App() {
  return (
    <Router>
      <div>
        <TopNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Office" element={<Office />} />
          <Route path="/News" element={<News />} />
        </Routes>

        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
