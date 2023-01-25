import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import BlogEntries from "../src/BlogEntries/BlogEntries";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
          <Route
            path="/BlogEntries/BlogEntries.js"
            element={<BlogEntries />}
            component={BlogEntries}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
