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
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Heading />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route exact path="/signup" element={<Account />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/:id/dashboard" element={<Dashboard />} />
            <Route exact path="/:id/deposit" element={<Deposit />} />
            <Route exact path=":id/withdraw" element={<Withdraw />} />
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
