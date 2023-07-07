import React, { useState } from "react";

import MyBackgroundImage41 from "../../assets/img/hero/save.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GoogleLogin from "react-google-login";
// const AutoComplete = styled(Autocomplete)(() => ({
//   width: 300,
//   marginBottom: '16px',
// }));
// const suggestions = [
//   { label: 'Afghanistan' },
//   { label: 'Aland Islands' },
//   { label: 'Albania' },
//   { label: 'Algeria' },
//   { label: 'American Samoa' },
//   { label: 'Andorra' },
// ]
const Registers = () => {
  const [value, setValue] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const [info, setInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value })),
      setSelectedOption((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
                        Register Company
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
                    <h4>Register Company</h4>
                    <p>Follow the easy step</p>
                    <div class="row">
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Company Name"
                            id="fullname"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Postal Zip code"
                            id="username"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleChange}
                            style={{
                              padding: "14px",
                              width: "100%",
                              backgroundColor: "#eeeff4",
                            }}
                          >
                            <option value="" disabled>
                              Number of years in business
                            </option>
                            <option value="option1">1-5 year</option>
                            <option value="option2">6-10 years</option>
                            <option value="option3">11 - 15</option>
                            <option value="option3">16 - 20</option>
                            <option value="option3">21 - 25</option>
                            <option value="option3">26 - 30</option>
                          </select>
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
                            type="text"
                            placeholder="Phone Number"
                            id="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Country"
                            id="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <input
                            type="text"
                            placeholder="Address"
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
                      <GoogleLogin
                        clientId="223427017037-f2ur72ie118jss0fguspipmdqppr80rr.apps.googleusercontent.com"
                        buttonText="Sign up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
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

export default Registers;
