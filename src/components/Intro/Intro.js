import React from 'react';
import './style.scss';

const Intro = props => {
  const {bkgSecondary, bkgMain, fontBody, accentOne, accentTwo, buttonColor} = props.theme
  return (
    <section className="intro-container"
      style={{
        color:fontBody,
        backgroundColor: bkgSecondary,
        backgroundImage: `url(data:image/svg+xml,<svg width="1440" height="449" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h1454v449H0z"/></defs><g transform="translate(-14)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z" fill=${bkgMain} mask="url(#b)"/></g></svg>)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="intro">
        <img src={require("./images/illustration-intro.png")} alt="" />
        <h1>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className="get-started" type="button" name="button"
          style={{
            backgroundColor:accentOne,
            backgroundImage:`linear-gradient(to right, ${accentOne}, ${accentTwo})`,
            color:buttonColor
          }}>
          Get Started
        </button>
      </div>

    </section>
  );
}

export default Intro;

// TODO: Transition css to scss
// TODO: Ensure mobile css
// TODO: Convert css to scss
