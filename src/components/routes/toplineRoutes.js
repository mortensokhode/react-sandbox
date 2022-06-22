import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AboutUsPage from "./AboutUsPage";
import SomeNewPage from "./SomeNewPage";
import TopLine from '../topline';
import Header from '../header';

const ToplineRoutes = () => {
  return (
    <>
      <TopLine />
      <Header />
      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/some-new-page" element={<SomeNewPage />}
        />
      </Routes>
    </>
  );
};

export default ToplineRoutes;
