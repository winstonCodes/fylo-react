import React from 'react';
import Logo from './Logo'
import './style.css';

const Header = props => (
  <header>
    <Logo />
    <nav>
      <a href="#">Features</a>
      <a href="#">Team</a>
      <a href="#">Sign In</a>
      <i class="fas fa-moon" id="switch-theme"></i>
    </nav>
  </header>
);

export default Header;
