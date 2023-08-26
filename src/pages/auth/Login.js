import React, { useState } from "react";
import MyBackgroundImage10 from "../assets/img/bg/breadcrumb_bg.jpg";
import MyBackgroundImage4 from "../assets/img/logo/logo.png";
import MyBackgroundImage7 from "../assets/img/logo/logo.png";
import MyBackgroundImage3 from "../assets/img/logo/logo-white.png";
import MyBackgroundImage40 from "../assets/img/hero/dashbord-img.jpg";
import MyBackgroundImage41 from "../assets/img/hero/save.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import GoogleLogin from "react-google-login";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleShowPassword = () => setShowPassword(!showPassword);

  // const googleSuccess = async (res) => {
  //   // const result = jwtDecode(res.credential);
  //   // const token = res?.credential;

  //   try {
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleError = (error) => {
  //   console.log(error);
  //   console.log("Google Sign In was unseccassful. Try again later");
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      window.location.href = "https://kubique.vercel.app";
    } catch (err) {
      alert("there is no user with that account");
    }
  };
  const responseGoogle = (response) => {
    // Handle the response from Google Sign-In
    if (response.profileObj) {
      const { email, name, googleId } = response.profileObj;
      // Send the necessary data to your server for user creation
      // You can use fetch or an API library like axios
      // Example:
      fetch("/signup-with-google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, googleId }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle the response from your server
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    }
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
                        Login to prepare your FS
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
                  <form method="post" id="contact-form" class="mt-100">
                    <h4>Login to Kubique</h4>
                    <p>Follow the easy step</p>
                    <div class="row">
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            name="website"
                            placeholder="Username/Email"
                            onChange={handleChange}
                            id="email"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                            name="website"
                            placeholder="Password"
                            onChange={handleChange}
                            id="password"
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-check mb-30">
                          <span>
                            <a href="/forgot">Forgot password?</a>
                          </span>
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
                      Login
                    </button>
                    <h2 style={{ fontSize: "17px", fontWeight: "800" }}>Or</h2>
                    <div class="col-xl-12">
                      <div class="post-check mb-30">
                        <span>
                          Do not have an account?{" "}
                          <span>
                            <Link to="/register">Sign up</Link>
                          </span>
                        </span>
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

export default Login;
