import React from "react";
import MyBackgroundImage10 from "./assets/img/bg/breadcrumb_bg.jpg";
import MyBackgroundImage4 from "./assets/img/logo/logo.png";
import MyBackgroundImage7 from "./assets/img/logo/logo.png";
import MyBackgroundImage3 from "./assets/img/logo/logo-white.png";
import Nav from "./Nav";
const Contact = () => {
  return (
    <div>
      <div id="__next" data-reactroot="">
        <Nav />
        <main>
          <div
            class="breadcrumb-area pt-215 pb-140 mb-120 pb-130"
            style={{ backgroundImage: `url(${MyBackgroundImage10})` }}
          >
            <div class="container">
              <div class="breadcrumb-content text-center">
                <h3 class="breadcrumb-title">Contact Us</h3>
                <div class="breadcrumb-trail">
                  <nav>
                    <ul class="trail-items">
                      <li class="trail-item">
                        <a href="index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li class="trail-item">
                        <span>About Us</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main>
          <div class="container">
            <div class="row pb-140 justify-content-between">
              <div class="col-xxl-5 col-xl-6 col-lg-6 mb-40 mb-lg-0">
                <div class="contact-left-info">
                  <div class="contact-info-left-top mb-30">
                    <h4 class="contact-info-title">Contact Information</h4>
                    <span class="contact-info-subtitle">
                      Naff the little rotter have gutted mate baking legged.
                    </span>
                  </div>
                  <div class="contact-left-list-wrapper">
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-phone-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Phone Number</h4>
                        <span class="single-contact-left-info">
                          +(536) 84 95 62 45
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-envelope"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Email Adress</h4>
                        <span class="single-contact-left-info">
                          sasup@gmail.com
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-map-marker-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Local Address</h4>
                        <span class="single-contact-left-info">
                          Dhaka-1506 Bangladesh
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-share-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label contact-left-label-space">
                          Share
                        </h4>
                        <div class="share-social">
                          <a href="#" data-color="#1877f2">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" data-color="#1da1f2">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" data-color="#ed445e">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                          <a href="#" data-color="#1ab7ea">
                            <i class="fab fa-vimeo-v"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  class="contact-form wow fadeInUp mb-50 mb-xl-0"
                  data-wow-delay=".2s"
                >
                  <form
                    action="https://sasup-nextjs.vercel.app/mail.php"
                    method="post"
                    id="contact-form"
                  >
                    <div class="row">
                      <div class="col-xl-6 col-md-6">
                        <div class="post-input post-input-2">
                          <label for="name" class="post-input-label-defualt">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <div class="post-input post-input-2">
                          <label for="email" class="post-input-label-defualt">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <label for="name" class="post-input-label-defualt">
                            Website *
                          </label>
                          <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            id="website"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <label for="comment" class="post-input-label-defualt">
                          Comment *
                        </label>
                        <div class="post-input has-textarea">
                          <textarea
                            id="comment"
                            name="message"
                            placeholder="Type here..."
                          ></textarea>
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
                    >
                      Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="footer-area pt-100 bg-footer-3" data-bg-color="#0c1636">
          <div class="container">
            <div class="pb-80 has-border-bottom-3">
              <div class="footer-3">
                <div class="row">
                  <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                    <div
                      class="footer-widget footer-widget-3 wow fadeInUp mb-30 mb-xl-0"
                      data-wow-delay=".2s"
                    >
                      <div class="logo mb-20">
                        <a href="index.html"></a>
                      </div>
                      <p class="widget-text" data-color="#c0c1cb">
                        Me old mucker cheeky bugger dont
                        <br />
                        want agro my little.
                      </p>
                      <a
                        class="sasup-theme-btn sasup-theme-btn-2"
                        href="contact.html"
                      >
                        <span>Get started</span>
                      </a>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-2 col-lg-4 col-md-6 col-sm-6">
                    <div
                      class="footer-widget footer-widget-3 space-left-0 wow fadeInUp mb-30 mb-xl-0 pl-105"
                      data-wow-delay=".4s"
                    >
                      <h5 class="color-white" data-color="#fff">
                        Resources
                      </h5>
                      <ul>
                        <li>
                          <a href="about.html">Documentation</a>
                        </li>
                        <li>
                          <a href="service.html">Solutions</a>
                        </li>
                        <li>
                          <a href="about.html">Road Map</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Brand Assets</a>
                        </li>
                        <li>
                          <a href="services.html">Feature List</a>
                        </li>
                        <li>
                          <a href="team.html">User Flow</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-2 col-lg-4 col-md-6 col-sm-6">
                    <div
                      class="footer-widget footer-widget-3 space-left-0 wow fadeInUp mb-30 mb-xl-0 pl-75"
                      data-wow-delay=".6s"
                    >
                      <h5 class="color-white" data-color="#fff">
                        Solutions
                      </h5>
                      <ul>
                        <li>
                          <a href="contact.html">Support</a>
                        </li>
                        <li>
                          <a href="about.html">Proposals</a>
                        </li>
                        <li>
                          <a href="about.html">Guides</a>
                        </li>
                        <li>
                          <a href="contact.html">Contracts</a>
                        </li>
                        <li>
                          <a href="about.html">Signatures</a>
                        </li>
                        <li>
                          <a href="about.html">Payments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 order-last order-md-first order-lg-last">
                    <div
                      class="footer-widget footer-widget-3 pr-xl-0 wow fadeInUp mb-30 mb-xl-0"
                      data-wow-delay=".8s"
                    >
                      <h5 class="color-white" data-color="#fff">
                        Newsletter
                      </h5>
                      <div class="newsletter-form mb-25">
                        <form action="#">
                          <div class="newsletter-form-input">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email address"
                            />
                          </div>
                          <button type="submit">Subcribe</button>
                        </form>
                      </div>
                      <div class="newsletter-follow">
                        <h5 class="newsletter-follow-label">Follow Us</h5>
                        <div class="social-follow">
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-vimeo-v"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="copyright-area pt-30 pb-30">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
                <p class="copyright-text">
                  Copyright ©2022
                  <a
                    data-color="#2f75ff"
                    target="_blank"
                    class="undefined"
                    href="https://themeforest.net/user/bdevs/portfolio"
                  >
                    Bdevs
                  </a>
                  . All Rights Reserved
                </p>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
                <div class="text-lg-end">
                  <div class="footer-social">
                    <a href="#" class="bg-facebook" data-bg-color="#3b5998">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="bg-twitter" data-bg-color="#1da1f2">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="bg-pinterest" data-bg-color="#e60023">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" class="bg-vimeo" data-bg-color="#1ab7ea">
                      <i class="fab fa-vimeo-v"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
