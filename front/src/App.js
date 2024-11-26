import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Header should be here, outside of Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer should be here, outside of Routes */}
      </div>
    </Router>
  );
};

export default App;
