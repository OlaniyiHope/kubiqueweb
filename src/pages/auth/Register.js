import React, { useState } from "react";
import MyBackgroundImage10 from "../assets/img/bg/breadcrumb_bg.jpg";
import MyBackgroundImage4 from "../assets/img/logo/logo.png";
import MyBackgroundImage7 from "../assets/img/logo/logo.png";
import MyBackgroundImage3 from "../assets/img/logo/logo-white.png";
import MyBackgroundImage40 from "../assets/img/hero/dashbord-img.jpg";
import MyBackgroundImage41 from "../assets/img/hero/save.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import GoogleLogin from "react-google-login";

const Register = () => {
  const [info, setInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
      };

      await axios.post("http://localhost:5000/api/auth/signup", newUser);
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div>
      <div id="__next" data-reactroot="">
        <main>
          <div class="container mt-30">
            <div class="row pb-70 justify-content-between">
              <div class="col-xxl-5 col-xl-6 col-lg-6 mb-40 mb-lg-0">
                <div
                  class="contact-left-info"
                  style={{ backgroundColor: "#f9f9f9", height: "700px" }}
                >
                  <img
                    src={MyBackgroundImage41}
                    class="mt-60"
                    style={{ width: "400px", height: "400px", margin: "auto" }}
                  />
                  <div class="content" style={{ paddingLeft: "20px" }}>
                    <h5
                      class="service-info-title white-color wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <a href="service-details.html" style={{ color: "black" }}>
                        Sign up to prepare your FS
                      </a>
                    </h5>
                    <p
                      class="service-info-desc white-color wow fadeInUp"
                      data-wow-delay=".6s"
                      style={{ color: "black", width: "70%" }}
                    >
                      Prepare your financial statement and perform your
                      accounting trial balance
                    </p>
                    <a
                      class="service-read-more-btn white-color wow fadeInUp"
                      data-wow-delay=".8s"
                      href="service-details.html"
                      style={{ color: "black" }}
                    >
                      Read More <i class="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  class="contact-form wow fadeInUp mb-50 mb-xl-0"
                  data-wow-delay=".2s"
                >
                  <form method="post" id="contact-form">
                    <h4>Sign Up to Kubique</h4>
                    <p>Follow the easy step</p>
                    <div class="row">
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Full Name"
                            id="fullname"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Company Name"
                            id="company_name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="Number"
                            placeholder="Phone Number"
                            id="phone"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <textarea
                            type="text"
                            placeholder="Address"
                            id="address"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                            placeholder="Password"
                            id="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Confirm Password"
                            id="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-check mb-30">
                          <input type="checkbox" />
                          <span>
                            By clicking this I have read and agree to the Terms
                            &amp; Conditions.
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="sasup-theme-btn sasup-theme-btn-2 transition-5"
                      onClick={handleClick}
                    >
                      Agree and continue
                    </button>
                    <h2 style={{ fontSize: "17px", fontWeight: "800" }}>Or</h2>
                    <div>
                      <div class="col-xl-12">
                        <div class="post-check mb-30">
                          <span>
                            Already have an account?{" "}
                            <span>
                              <Link to="/login">Sign in.</Link>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
