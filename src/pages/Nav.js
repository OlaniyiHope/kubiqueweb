import React, { useState } from "react";
import MyBackgroundImage4 from "./assets/img/logo/logo.png";
import MyBackgroundImage7 from "./assets/img/logo/logo.png";
import MyBackgroundImage3 from "./assets/img/logo/logo-white.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
                          <a href="index.html">Home</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="index.html">Home Layout 1</a>
                            </li>
                            <li>
                              <a href="home-2.html">Home Layout 2</a>
                            </li>
                            <li>
                              <a href="home-3.html">Home Layout 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <a href="index.html#">Pages</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="services.html">Service</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                            <li>
                              <a href="error-404.html">Error 404</a>
                            </li>
                          </ul>
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
                      <div class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`responsive-sidebar ${mobileMenuOpen ? "open" : ""}`}>
          <div className="responsive-sidebar-inner">
            <nav className="mobile-menu">
              <div class="mm-menu">
                <ul>
                  <li class="has-droupdown">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/about">About</Link>
                    </a>
                  </li>
                  <li class="has-droupdown">
                    <a>Pages</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                      <li>
                        <a href="services.html">Service</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                      <li>
                        <a href="error-404.html">Error 404</a>
                      </li>
                    </ul>
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
            <div className="responsive-sidebar-actions">{/* ... */}</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
