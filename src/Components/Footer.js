import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MovieSearch Hub. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
