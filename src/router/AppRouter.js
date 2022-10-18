import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import CollectionPage from "../pages/CollectionPage";
import TopChartPage from "../pages/TopChartPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/chart" element={<TopChartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
