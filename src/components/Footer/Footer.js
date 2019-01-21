import React from 'react';
import './style.scss';

const Footer = props => (
  <footer>

      <div class="footer-header">
        <img src={require("./images/logo.svg")} alt="" class="logo" />

      </div>
      <div class="col-1">
        <div class="icon-text">
          <img src={require("./images/icon-location.svg")} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
      </div>
      <div class="col-2">
        <p><img src={require("./images/icon-phone.svg")} alt="" />+1-543-123-4567</p>
        <p><img src={require("./images/icon-email.svg")} alt="" />example@fylo.com</p>

      </div>
      <div class="col-3">

        <a href="#">About Us</a>
        <a href="#">Jobs</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>

      </div>
      <div class="col-4">
        <a href="#">Contact Us</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>

      </div>
      <div class="col-5">
        <p class="social-icons">
          <i class="fab fa-facebook-square fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-twitter-square fa-2x"></i>
        </p>
      </div>



    </footer>
);

export default Footer;
