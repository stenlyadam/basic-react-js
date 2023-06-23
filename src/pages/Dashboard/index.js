import React from "react";
import "../../assets/css/style.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Clients from "../../components/Clients";
import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";

function Dashboard() {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
