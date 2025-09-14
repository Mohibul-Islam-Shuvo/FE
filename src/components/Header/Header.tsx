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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">About Blue Dream</a></li>
                  <li><a className="dropdown-item" href="#">Key Management</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Concerns</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Factory</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Free Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Media News</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
