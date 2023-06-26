import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout/Checkout";
import Footer from "./Footer/Footer";
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";

import SearchData from "./SearchData\\SearchData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchData />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
