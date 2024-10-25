import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Works from './pages/Works';
import Process from './pages/Process';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage'; // New Error Page
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer

function App() {
  return (
    <Router>
      {/* Flexbox container with min-h-screen */}
      <div className="min-h-screen flex flex-col">
        <Header />  {/* Header is at the top */}
        {/* Main content area will grow to take available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />  {/* Catch-all route */}
          </Routes>
        </main>
        <Footer />  {/* Footer will stay at the bottom */}
      </div>
    </Router>
  );
}

export default App;
