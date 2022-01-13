import React from "react";
import catImage from "./../img/susan.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Cat Logger</h1>
      <img src={catImage} alt="an image of a cat" />
    </React.Fragment>
  );
}

export default Header;