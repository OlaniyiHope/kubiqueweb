import React from "react";
import MyBackgroundImage4 from "./assets/img/logo/logo.png";
import MyBackgroundImage7 from "./assets/img/logo/logo.png";
import MyBackgroundImage3 from "./assets/img/logo/logo-white.png";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <header id="header-wrap">
        <div class="header-transparent">
          <div class="header-main header-sticky">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 d-flex align-items-center col-lg-8 col-md-6 col-sm-4 col-6">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="index.html">
                      <img src={MyBackgroundImage3} />
                    </a>
                    <a>
                      <img class="logo-2" src={MyBackgroundImage4} />
                    </a>
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
                  {user ? (
                    user.username
                  ) : (
                    <div class="sasup-header-action-btn">
                      <a
                        class="sasup-transparent-btn d-none d-sm-inline-block"
                        href="/login"
                      >
                        <i class="far fa-user"></i>
                        <Link to="/login">Login</Link>
                      </a>
                      <a
                        class="sasup-theme-btn style-white ml-25 d-none d-sm-inline-block"
                        href="/register"
                      >
                        <Link to="/register">Register</Link>
                      </a>
                      <div class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="responsive-sidebar d-block d-lg-none">
          <div class="responsive-sidebar-inner">
            <div class="logo mb-30">
              <div class="row">
                <div class="col-6">
                  <img src={MyBackgroundImage7} />
                </div>
                <div class="col-6">
                  <div class="text-end">
                    <button class="responsive-sidebar-close">
                      <i class="fal fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="resposive-sidebar-menu mb-50">
              <div class="mm-menu">
                <ul>
                  <li class="has-droupdown">
                    <a>Home</a>
                    <ul class="sub-menu">
                      <li>
                        <a>
                          {" "}
                          <Link to="/">Home Page </Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          {" "}
                          <Link to="/">Home Page 2</Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          {" "}
                          <Link to="/">Home Page 3</Link>
                        </a>
                      </li>
                    </ul>
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
                </ul>
              </div>
            </div>
            <div class="responsive-sidebar-actions">
              <a class="sasup-border-btn d-block sasup-broder-btn-space-3 ms-0 text-center mb-2">
                <Link to="/login">Login</Link>
              </a>
              <a class="sasup-theme-btn text-center d-inline-block w-100">
                <Link to="/register">Register</Link>
              </a>
            </div>
          </div>
        </div>
        <div class="body-overlay"></div>
      </header>
    </div>
  );
};

export default Nav;
