import React, { useState } from "react";
import MyBackgroundImage4 from "./assets/img/logo/logo.png";
import MyBackgroundImage7 from "./assets/img/logo/logo.png";
import MyBackgroundImage3 from "./assets/img/logo/logo-white.png";
import { FaTimes } from "react-icons/fa";

import "./Nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div>
      <header id="header-wrap">
        <div class="header-transparent">
          <div class="header-main header-sticky">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 d-flex align-items-center col-lg-8 col-md-6 col-sm-4 col-6">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="index.html"></a>
                    <h6
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "23px",
                        textDecoration: "none",
                      }}
                    >
                      KUBIQUE
                    </h6>
                  </div>
                  <div class="sasup-header d-none d-lg-inline-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>

                        <li>
                          <Link to="/about">Our service</Link>
                        </li>

                        <li>
                          <a href="blog-list.html">Blog</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="blog-list.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <Link to="/contact">Contact</Link>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-6">
                  <div class="sasup-header-action-btn">
                    <a
                      class="sasup-transparent-btn d-none d-sm-inline-block"
                      href="/login"
                    >
                      <i class="far fa-user"></i>
                      <Link to="https://kubiqueweb.vercel.app">Login</Link>
                    </a>
                    <a
                      class="sasup-theme-btn style-white ml-25 d-none d-sm-inline-block"
                      href="/register"
                    >
                      <Link to="https://kubiqueweb.vercel.app">Register</Link>
                    </a>
                    <div
                      className={`mobile-bar-control mobile-bar-control-white ${
                        mobileMenuOpen ? "open" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <div
                        class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none"
                        onClick={toggleMobileMenu}
                      >
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`responsive-sidebar ${mobileMenuOpen ? "open" : "close"}`}
        >
          <div className="responsive-sidebar-inner">
            {/* Mobile menu */}

            <nav className="mobile-menu">
              <div class="mm-menu">
                <ul>
                  <li className={`line ${mobileMenuOpen ? "close" : ""}`}>
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      style={{ fontSize: "20px" }}
                    >
                      KUBIQUE
                      <span
                        style={{
                          display: "inlineBlock",
                          float: "right",
                        }}
                      >
                        {mobileMenuOpen ? <FaTimes /> : ""}
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/about">About</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/about">Our service</Link>
                    </a>
                  </li>

                  <li class="has-droupdown">
                    <a>Blog</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="blog-list.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/contact">Contact</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="https://kubiqueweb.vercel.app">Login</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="https://kubiqueweb.vercel.app">Register</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="responsive-sidebar-actions"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
