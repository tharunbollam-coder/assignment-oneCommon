import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">Dream Builders</div>
        <nav className="nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>You Dream, We'll Make It Real</h1>
          <p>A legacy of excellence in building your future!</p>
          <button>Contact Us</button>
        </div>
        <div className="hero-image">
          <img src="https://res.cloudinary.com/dogmybs69/image/upload/v1736321960/mmhy5u7hldzfssy3vshw.svg" alt="Construction Worker" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-image">
          <img src="https://res.cloudinary.com/dogmybs69/image/upload/v1736322082/ujpv8urimyxpuxbndrhl.svg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Dream Builders brings innovative solutions to every challenge—a perfect blend of 
            vision, quality, and commitment to making dreams come true.
          </p>
          <button>Know More</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Building Materials</h3>
            <p>High-quality materials for your project.</p>
            <button>Read More</button>
          </div>
          <div className="service-card">
            <h3>Joint Ventures</h3>
            <p>Collaborative development solutions.</p>
            <button>Read More</button>
          </div>
          <div className="service-card">
            <h3>RERA Consultants</h3>
            <p>Professional regulatory advisory.</p>
            <button>Read More</button>
          </div>
          <div className="service-card">
            <h3>2D & 3D Consultant</h3>
            <p>Custom design services.</p>
            <button>Read More</button>
          </div>
          <div className="service-card">
            <h3>Construction & Interior</h3>
            <p>End-to-end building and interior solutions.</p>
            <button>Read More</button>
          </div>
          <div className="service-card">
            <h3>Land Development</h3>
            <p>Expert land transformation services.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
