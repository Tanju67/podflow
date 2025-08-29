import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <main>
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </main>
  );
}

export default MainLayout;
