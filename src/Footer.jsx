// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 items-center space-x-5">
          <a href="#facebook" className="text-gray-600 hover:text-gray-800">
            {" "}
            <img
              src="https://i.pinimg.com/736x/9b/e7/a0/9be7a031fcd2215a8827ae719d546182.jpg"
              alt="fb-logo"
              className="h-8"
            />{" "}
          </a>
          <a href="#instagram" className="text-gray-600 hover:text-gray-800">
            {" "}
            <img
              src="data:image/png;base64,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"
              alt="insta-logo"
              className="h-7"
            />{" "}
          </a>
          <a href="#twitter" className="text-gray-600 hover:text-gray-800">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Dajhf6JNuPgmQVf4QI6IaQIxO36ketUzw&s"
              alt="twitter-logo"
              className="h-6"
            />{" "}
          </a>
          <a href="#linkedin" className="text-gray-600 hover:text-gray-800">
            {" "}
            <img
              src="https://freelogopng.com/images/all_img/1656997580linkedin-icon-black.png"
              alt="linkein-logo"
              className="h-5"
            />{" "}
          </a>
        </div>
        <p className="text-gray-600">&copy; 2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
