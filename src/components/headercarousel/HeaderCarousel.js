import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./headercarousel.scss";
import Typed from "react-typed";
import logo from "./acmlogo1.png";

class HeaderCarousel extends React.Component {
  render() {
    return (
      <div id="introduction" class="d-flex align-items-center">
        <div id="content" class="position-relative">
          <img id="logoImage" src={logo} alt="logo" />
          <span id="codeText">
            .creates('
            <Typed
              className="typed"
              strings={[
                "creative thinkers",
                "future leaders",
                "real-life experience",
                "problem solvers",
                "hard workers",
              ]}
              typeSpeed={100}
              backDelay={60}
              loop
            />
            ');
          </span>
        </div>
      </div>
    );
  }
}

export default HeaderCarousel;
