import React from "react";
import "./Footer.css";

const Footer = () => {
  const theYearOfOurLord = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* <div className="foot-logo">
          <a className="footer-logo" href="/">
            Britny Lain
          </a>
        </div> */}
        <div className="footer-link-container">
          <div className="footer-link-wrapper">
            <div className="footer-link-item">
              <div className="footer-link">
                <a className="footer-a" href="/contactus">
                  Lets Connect
                </a>

                <a className="footer-a" href="#about">
                  About
                </a>

                <a className="footer-a" href="/blog">
                  Blog
                </a>

                <a className="footer-a" href="/faqs">
                  FAQs
                </a>

                <div className="social-wrapper">
                  <div className="social-icons">
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      {/* <FaFacebook /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="socialmedia"> */}

        {/* </div> */}
      </div>
      <div className="web-rights">
        <p>Britny Lain © {theYearOfOurLord} All rights resevered.</p>
      </div>
    </footer>
  );
};

export default Footer;
