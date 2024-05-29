import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// 頁面組件
import Layout from "./components/Layout";
import Home from "./pages/HomePage/Home";
import TripBook from "./pages/TripBookingPage/TripBook";
import Travel from "./pages/TravelPage/Travel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<TripBook />} />
          <Route path="/travel" element={<Travel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
