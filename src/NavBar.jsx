// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-end p-6">
      <ul className="flex space-x-6 text-lg">
        <li><a href="#works" className="hover:text-gray-600">Works</a></li>
        <li><a href="#blog" className="hover:text-gray-600">Blog</a></li>
        <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
