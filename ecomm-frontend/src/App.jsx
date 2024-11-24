import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProdList from "./components/ProdList"; //imports Product list component
import CartView from "./components/CartView"; //imports cart component
import AnnouncementPage from "./components/AnnouncementPage"; //imports announcement component

const App = () => {
  const SHOW_ANNOUNCEMENT = true; //set this to false, to toggle OFF the Announcement Page
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            SHOW_ANNOUNCEMENT ? (
              <AnnouncementPage />
            ) : (
              <Navigate to="/products" /> //change Path here incase of Toggle ON/OFF
            )
          }
        />

        <Route path="/products" element={<ProdList />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
