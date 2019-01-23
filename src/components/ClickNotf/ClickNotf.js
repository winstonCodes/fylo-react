import React from "react";
import './style.scss';

const ClickNotf = props => {
  const {bkgSecondary, fontHeader} = props.theme;
  const style = {
    backgroundColor: bkgSecondary,
    color: fontHeader,
    margin: 0,
    textAlign: "center"
  }
  return(
    <div style={style}>
      <p id="notf">Click to change theme</p>
    </div>
  );
}

export default ClickNotf;
