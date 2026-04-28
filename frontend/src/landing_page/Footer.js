import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          
          <div className="col">
            <img src="/media/images/logo.svg" style={{ width: "50%" }} alt="logo" />
            <p>
              &copy; 2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <Link to="/about">About</Link><br />
            <Link to="/product">Products</Link><br />
            <Link to="/pricing">Pricing</Link><br />
            <Link to="/">Referral programme</Link><br />
            <Link to="/">Careers</Link><br />
          </div>

          <div className="col">
            <p>Support</p>
            <Link to="/support">Contact</Link><br />
            <Link to="/support">Support portal</Link><br />
          </div>

          <div className="col">
            <p>Account</p>
            <Link to="/signup">Open an account</Link><br />
            <Link to="/">Fund transfer</Link><br />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;