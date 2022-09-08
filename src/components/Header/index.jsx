import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/HomeImages/Logo.png';
const Header = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                <ul className="navbar-nav   ul">
                <li className="nav-item">
                  <a className="navbar-brand" href="#">
                    <img className="navlogo" src={logo} alt=''></img>
                    NFT Genrator
                  </a>
                  </li>
                  </ul>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mb-4  ul">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Community
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active contactUs"
                          aria-current="page"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          LogIn
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a>
                          <buttonn className="btn btn-primary">Sing Up</buttonn>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
