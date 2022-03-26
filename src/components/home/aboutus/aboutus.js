import React, { Component } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import "./aboutus.scss";

class AboutUs extends Component {
  render() {
    return (
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        delay="1"
        animateOnce="true"
      >
        <section className="AboutUs-tease">
          <div className="left">
            <div className="content">
              <div className="subTitle"> acm@calstatela </div>
              <div className="title"> Who are we? </div>
              <div className="description">
                {" "}
                We’re a chapter of Association for Computing Machinery at
                California State University, Los Angeles. We bring students with
                a common passion and devotion into the field of computing.{" "}
              </div>
              <div className="link-btn mt-4">
                <a className="label px-5" href="/aboutus">
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </section>
      </AnimationOnScroll>
    );
  }
}

export default AboutUs;
