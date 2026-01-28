import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home.jsx";
import Setting from "./Setting.jsx";
import ClassPage from "./Class.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="educlass-container">
        <Navbar />

        <div className="main-container">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/classPage" element={<ClassPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
