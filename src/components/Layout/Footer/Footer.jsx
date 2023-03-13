import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <h2>yellowkitchen</h2>
          <div className="yellow"></div>
        </div>
        <div className="center section">
          <h2>About</h2>
          <div className="footer_content">
            <ul>Concept</ul>
            <ul>Franchise</ul>
            <ul>Business</ul>
            <ul>Restaurant signup</ul>
            <ul>For Investors</ul>
          </div>
        </div>
        <div className="center section">
          <h2>Get help</h2>
          <div className="footer_content">
            <ul>Read FAQs</ul>
            <ul>Restaurants</ul>
            <ul>Specialities</ul>
            <ul>Sign up to deliver</ul>
            <ul>English</ul>
          </div>
        </div>
        <div className="right section">
          <h2>Contact us</h2>
          <div className="footer_content">
            <ul>Yellow kitchen Paris 11</ul>
            <ul>69 avenue de la Republique 75011 Paris</ul>
            <ul>0800 111 126</ul>
            <ul>contact@yellowkitchens.com</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
