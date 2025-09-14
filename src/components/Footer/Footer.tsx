import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Site Menu</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Concerns</a></li>
              <li><a href="#" className="text-white">Factory</a></li>
              <li><a href="#" className="text-white">Products</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Concerns</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Blue Dream Apparels</a></li>
              <li><a href="#" className="text-white">Blue Dream Fashion</a></li>
              <li><a href="#" className="text-white">Blue Dream Sourcing</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Head Office</h5>
            <p>House-12, Road-08, Sector-11, Uttara, Dhaka-1230, Bangladesh</p>
            <p>Phone: +8802-48040850</p>
            <p>Email: info@bluedreamgroup.com</p>
            <div>
              <a href="#" className="text-white me-2">Facebook</a>
              <a href="#" className="text-white me-2">X</a>
              <a href="#" className="text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Blue Dream Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
