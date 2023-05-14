import React from "react";
import BottomNav from "./components/BottomNav";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_section">
        <BottomNav />
        <div className="line"></div>
        <h2>Made with ❤️ by Vaibhav yadav</h2>
      </div>
    </div>
  );
}

export default Footer;
