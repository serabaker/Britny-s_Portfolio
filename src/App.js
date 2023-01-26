import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entries from "./pages/Entries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<Entries />} />
      </Routes>
    </Router>
  );
}

export default App;
