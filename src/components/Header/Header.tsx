import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="top-bar bg-light text-dark py-1">
        <div className="container d-flex justify-content-between">
          <div>
            <span>+8802-48040850</span>
            <span className="ms-3">info@bluedreamgroup.com</span>
          </div>
          <div>
            {/* Social media icons will go here */}
            <a href="#" className="ms-2">Facebook</a>
            <a href="#" className="ms-2">X</a>
            <a href="#" className="ms-2">Instagram</a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* Logo will go here */}
            <strong>Blue Dream Group</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision-mission">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#at-a-glance">At a Glance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#members">Members</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
