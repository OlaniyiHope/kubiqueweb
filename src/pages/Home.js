import React from "react";
import MyBackgroundImage4 from "./assets/img/logo/logo.png";
import MyBackgroundImage7 from "./assets/img/logo/logo.png";
import MyBackgroundImage3 from "./assets/img/logo/logo-white.png";
import MyBackgroundImage8 from "./assets/img/shape/shape_01.png";
import MyBackgroundImage9 from "./assets/img/shape/shape_02.png";
import MyBackgroundImage10 from "./assets/img/shape/shape_03.png";
import MyBackgroundImage11 from "./assets/img/shape/shape_04.png";
import MyBackgroundImage12 from "./assets/img/icon/arrow.png";
import MyBackgroundImage13 from "./assets/img/hero/dashbord-img.jpg";
import MyBackgroundImage14 from "./assets/img/feature/feature-2.png";
import MyBackgroundImage15 from "./feature-1.png";
import MyBackgroundImage16 from "./assets/img/feature/feature-3.png";
import MyBackgroundImage17 from "./assets/img/feature/feature-4.png";
import MyBackgroundImage18 from "./assets/img/service/service_bg.png";
import MyBackgroundImage19 from "./assets/img/service/service-1.png";
import MyBackgroundImage22 from "./assets/img/service/service_shape_2.png";
import MyBackgroundImage23 from "./assets/img/service/service-1-2.png";
import MyBackgroundImage24 from "./assets/img/service/service-2-2.png";
import MyBackgroundImage30 from "./assets/img/service/service-dot-2.png";
import MyBackgroundImage20 from "./assets/img/service/service-2.png";
import MyBackgroundImage21 from "./assets/img/service/dot_shape.png";
import MyBackgroundImage25 from "./assets/img/news/news_img_1.jpg";
import MyBackgroundImage26 from "./assets/img/news/news_img_2.jpg";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <section class="hero-area hero-space-1 bg-top-left pt-190 pb-150 mb-115 bg-blue fix">
          <div class="container">
            <div class="hero-inner p-rel">
              <div class="hero-shapes">
                <div class="shape1 p-abs">
                  <img src={MyBackgroundImage8} />
                </div>
                <div class="shape2 p-abs">
                  <img src={MyBackgroundImage9} />
                </div>
                <div class="shape3 p-abs d-none d-xl-block">
                  <img src={MyBackgroundImage10} />
                </div>
                <div class="shape4 p-abs">
                  <img src={MyBackgroundImage11} />
                </div>
              </div>
              <div class="sasup-hero-content text-center">
                <h3
                  class="sasup-hero-content-main wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  cloud base financial
                  <br />
                  statement software
                </h3>
                <span
                  class="sasup-hero-content-sub wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Simple solution that helps preparers simplify the financial
                  statements preparation process, track expense, customize
                  invoice
                </span>
                <div
                  class="sasup-hero-form mb-30 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div class="sasup-hero-form-inner p-rel d-flex align-items-center">
                    <form action="#">
                      <div class="sasup-form-group">
                        <input type="text" id="hero-email" />
                        <label for="hero-email" class="epix-hero-form-label">
                          Enter
                          <span class="d-none d-sm-inline-block">your</span>
                          email address...
                        </label>
                      </div>
                      <div class="sasup-form-group">
                        <input type="submit" value="Get Started" />
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="sasup-form-group mb-55 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div class="started-label">
                    <label for="hero-email">
                      Get started for free
                      <img src={MyBackgroundImage12} />
                    </label>
                  </div>
                </div>
                <div class="dashbord-img dashbord-shadow d-inline-block fix">
                  <img src={MyBackgroundImage13} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="faetures-area features-space-1 pb-110">
          <div class="container">
            <div class="row mb-40">
              <div class="col-xxl-12">
                <div class="section-title text-center">
                  <span
                    class="sasup-s-subtitle wow fadeInUp"
                    data-wow-delay="0"
                  >
                    Special Layout
                  </span>
                  <h3 class="sasup-s-title wow fadeInUp" data-wow-delay=".2s">
                    Features that
                    <br />
                    Help you build better.
                  </h3>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xxl-10">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30 wow fadeInUp bg-white"
                      data-wow-delay=".2s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img src={MyBackgroundImage14} />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Create pages using tons of hand crafted sections
                          </a>
                        </h4>
                        <a class="read-more-btn" href="service-details.html">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30 wow fadeInUp bg-white"
                      data-wow-delay=".4s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img src={MyBackgroundImage15} />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Start your website project the right way with Inform
                          </a>
                        </h4>
                        <a class="read-more-btn" href="service-details.html">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30 wow fadeInUp bg-white"
                      data-wow-delay=".6s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img src={MyBackgroundImage16} />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Adapt Inform to your brand Using the style guide
                          </a>
                        </h4>
                        <a class="read-more-btn" href="service-details.html">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30 wow fadeInUp bg-white"
                      data-wow-delay=".8s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img src={MyBackgroundImage17} />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Power your business
                            <br />
                            with multiple CMS integrations
                          </a>
                        </h4>
                        <a class="read-more-btn" href="service-details.html">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="service-area pb-160 fix">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xxl-5 col-xl-5 col-lg-6">
                <div class="service_left mb-60 mb-lg-0">
                  <div class="section-title mb-35">
                    <span
                      class="sasup-s-subtitle wow fadeInUp"
                      data-wow-delay="0"
                    >
                      What we do best
                    </span>
                    <h3
                      class="sasup-s-title wow fadeInUp hidden-lg-br"
                      data-wow-delay=".2s"
                    >
                      Chat directly
                      <br />
                      with your creators
                    </h3>
                  </div>
                  <div class="sasup-service-list mb-25">
                    <div class="sasup-single-list">
                      <div class="sasup-icon">
                        <i class="far fa-check"></i>
                      </div>
                      <div class="sasup-content">
                        <p>
                          <span>Automated reminders:</span> Your Success Manager
                          is
                          <br />
                          in the chat, supporting
                        </p>
                      </div>
                    </div>
                    <div class="sasup-single-list">
                      <div class="sasup-icon">
                        <i class="far fa-check"></i>
                      </div>
                      <div class="sasup-content">
                        <p>
                          <span>Real Support:</span> Your Success manager in the
                          chat
                          <br />
                          supporting you every step.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="sasup-service-action">
                    <a class="sasup-gray-border-btn" href="services.html">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-6">
                <div class="text-lg-end">
                  <div class="service-right-thumbs">
                    <img src={MyBackgroundImage18} />
                    <div class="service-dashbord-thumb">
                      <div class="single-dashbord dashbord-1 fix">
                        <img src={MyBackgroundImage19} />
                      </div>
                      <div class="single-dashbord dashbord-2 fix">
                        <img src={MyBackgroundImage20} />
                      </div>
                      <div class="single-dashbord dashbord-3 fix">
                        <img src={MyBackgroundImage21} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="extra-service-area pb-120">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xxl-7 col-xl-7 col-lg-6">
                <div class="text-xxl-end text-xl-end">
                  <div class="service-left-thumbs mb-60 mb-lg-0">
                    {" "}
                    <img src={MyBackgroundImage22} />
                    <div class="service-dashbord-thumb style-2">
                      <div class="single-dashbord dashbord-1 fix">
                        <img src={MyBackgroundImage23} />
                      </div>
                      <div class="single-dashbord dashbord-2 fix">
                        <img src={MyBackgroundImage24} />
                      </div>
                      <div class="single-dashbord dashbord-3 fix">
                        <img src={MyBackgroundImage30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-6">
                <div class="service_right pl-68">
                  <div class="section-title mb-15">
                    <span
                      class="sasup-s-subtitle wow fadeInUp"
                      data-wow-delay="0"
                    >
                      What we do best
                    </span>
                    <h3
                      class="sasup-s-title wow fadeInUp has-extra-title-info hidden-lg-br"
                      data-wow-delay=".2s"
                    >
                      Design used
                      <br />
                      to be the seasoning
                    </h3>
                    <p class="section-title-extra-info">
                      Save hundred of hours automated creation.
                    </p>
                  </div>
                  <div class="sesup-service-desc-info">
                    <p>
                      Billi is designed with positivity in mind, because wearee
                      here to make your financial journey a good one.Easily
                      connect unlimited accounts.
                    </p>
                  </div>
                  <div class="sasup-service-action">
                    <a class="sasup-theme-btn" href="services.html">
                      <span>Discover More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="latest-news pb-140">
          <div class="container">
            <div class="row mb-47">
              <div class="col-xxl-12">
                <div class="section-title text-center">
                  <span
                    class="sasup-s-subtitle wow fadeInUp"
                    data-wow-delay="0"
                  >
                    Latest News
                  </span>
                  <h3 class="sasup-s-title wow fadeInUp" data-wow-delay=".2s">
                    Popular from Sasup
                  </h3>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xxl-10 col-xl-10">
                <div class="latest-news-inner-wrap">
                  <div class="row">
                    <div
                      class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div class="news-box mb-30 mb-md-0">
                        <div class="news-box-wrap">
                          <div class="thumb">
                            <img src={MyBackgroundImage25} />
                            <a class="news-cat" href="blog-list.html">
                              Development
                            </a>
                          </div>
                          <div class="content">
                            <div class="news-meta">
                              <div class="single-meta">
                                <span class="news-date">20 March 2022</span>
                              </div>
                              <div class="single-meta">
                                <a
                                  class="news-comment"
                                  href="blog-details.html"
                                >
                                  3 Comment
                                </a>
                              </div>
                            </div>
                            <h4 class="news-link">
                              <a href="blog-details.html">
                                How to solve design work around the Work
                                problem.
                              </a>
                            </h4>
                            <a class="news-read-more" href="blog-details.html">
                              Read More<i class="fal fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div class="news-box mb-30 mb-md-0">
                        <div class="news-box-wrap">
                          <div class="thumb">
                            <img src={MyBackgroundImage26} />
                            <a class="news-cat" href="blog-list.html">
                              Analysis
                            </a>
                          </div>
                          <div class="content">
                            <div class="news-meta">
                              <div class="single-meta">
                                <span class="news-date">14 June 2022</span>
                              </div>
                              <div class="single-meta">
                                <a
                                  class="news-comment"
                                  href="blog-details.html"
                                >
                                  3 Comment
                                </a>
                              </div>
                            </div>
                            <h4 class="news-link">
                              <a href="blog-details.html">
                                A closer look at Individual OKRs with Peter
                                Kappus.
                              </a>
                            </h4>
                            <a class="news-read-more" href="blog-details.html">
                              Read More<i class="fal fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="divider mb-115" />
        <div class="rating-area pb-60">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xxl-10">
                <div class="rating-content-inner">
                  <div class="row align-items-end">
                    <div class="col-xxl-6 col-lg-6">
                      <div class="rating-left mb-30 mb-lg-0">
                        <div class="section-title">
                          <span
                            class="sasup-s-subtitle wow fadeInUp"
                            data-wow-delay="0"
                          >
                            Next Generation
                          </span>
                          <h3
                            class="sasup-s-title wow fadeInUp mb-0"
                            data-wow-delay=".2s"
                          >
                            Chat directly
                            <br />
                            with your creators
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-6 col-lg-6">
                      <div
                        class="rating-right wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div class="rating-count-wrap">
                          <div class="single-rating-item">
                            <h4 class="single-rating-count-number">
                              4.0 / 5.0
                            </h4>
                            <p class="single-rating-count-label">
                              Product offering rating
                            </p>
                          </div>
                          <div class="single-rating-item">
                            <h4 class="single-rating-count-number">
                              4.2 / 4.8
                            </h4>
                            <p class="single-rating-count-label">
                              Strategic vision rating
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cta-area cta-1-space pt-135 pb-135 bg-default bg-cta"
          data-bg-color="#4a2593"
        >
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xxl-6 col-xl-8 col-lg-7 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div class="cta-left mb-30 mb-lg-0">
                  <span class="cta-subtitle-1">Call To Action</span>
                  <h3 class="cta-title-1">
                    Join Sasup and increase your productivity.
                  </h3>
                </div>
              </div>
              <div
                class="col-xxl-6 col-xl-4 col-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div class="cta-actions text-lg-end">
                  <a class="cta-border-btn" href="contact.html">
                    Get Started
                  </a>
                  <a class="cta-solid-btn ml-15" href="contact.html">
                    Sign Up Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer-area pt-90">
        <div class="container">
          <div class="pb-80 has-border-bottom">
            <div class="footer-1">
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 order-last col-sm-12 order-lg-first">
                  <div
                    class="footer-widget wow fadeInUp mb-30 mb-md-0"
                    data-wow-delay=".2s"
                  >
                    <div class="logo mb-20">
                      <a href="index.html"></a>
                    </div>
                    <p class="widget-text">
                      Me old mucker cheeky bugger is dont
                      <br />
                      want agro in my flat little.
                    </p>
                    <a
                      class="sasup-theme-btn sasup-theme-btn-2 undefined"
                      href="contact.html"
                    >
                      <span>Get started</span>
                    </a>
                  </div>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8">
                  <div class="row mb-30 mb-lg-0">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                      <div
                        class="footer-widget wow fadeInUp mb-30 mb-md-0"
                        data-wow-delay=".4s"
                      >
                        <h5>Product</h5>
                        <ul>
                          <li>
                            <a href="services.html">Product Tour</a>
                          </li>
                          <li>
                            <a href="about.html">Analytics</a>
                          </li>
                          <li>
                            <a href="service-details.html">Product Overview</a>
                          </li>
                          <li>
                            <a href="about.html">What’s New</a>
                          </li>
                          <li>
                            <a href="portfolio.html">Templates</a>
                          </li>
                          <li>
                            <a href="about.html">Quotes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div class="footer-widget mb-30 mb-md-0">
                        <h5>Resources</h5>
                        <ul>
                          <li>
                            <a href="about.html">Documentation</a>
                          </li>
                          <li>
                            <a href="services.html">Solutions</a>
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
                    <div
                      class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <div class="footer-widget">
                        <h5>Solutions</h5>
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
  );
};

export default Home;
