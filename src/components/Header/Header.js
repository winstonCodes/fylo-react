import React from 'react';
import Logo from './images/Logo'
import './style.scss';



const Header = props => {
  const {bkgSecondary, fontHeader} = props.theme;

  return(
    <header
    style={{
      backgroundColor: bkgSecondary,
      color: fontHeader
    }}>
      <Logo color={fontHeader} />
      <nav>
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign-In</a>
      </nav>
    </header>
  );
}

export default Header;

// TODO: Transition css to scss
// TODO: Ensure mobile css
