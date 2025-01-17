import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="mt-0">Left Menu</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/userdata" className="nav-link">
                    User Data List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/exportcsv" className="nav-link">
                    Export Csv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/enablebutton" className="nav-link">
                    Enable Button
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addmoreinput" className="nav-link">
                    Add More Input
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
