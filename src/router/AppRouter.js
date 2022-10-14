import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/product" element={<ProductPage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
