import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import Performance from "./pages/Perfomance";
import Faqs from "./pages/Faqs";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <Heading />
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route exact path="/acc" element={<Account />} />
            <Route exact path="/performance" element={<Performance />} />
            <Route exact path="/faqs" element={<Faqs />} />
            <Route exact path="/how-it-works" element={<HowItWorks />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
