import React, { Component } from "react";
import firebase from "../../professional-events/firebaseConfig.js";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import "./impAnnouncements.scss";

class ImpAnnouncements extends Component {
  state = {
    upcomingEvent: null,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("upcomingEvents")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ upcomingEvent: events });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let eventPosters = [
      "./images/ACM-Spring2023-Scholarships.png",
      "./images/spring2023-pro-dev.png",
    ];

    let links = [
      "https://forms.gle/26x5NMDnrFE3jhn89",
      "https://forms.gle/hAjvNSbS47ghMxuE8",
    ];

    let upcomingPosters = ["./images/ACM-Spring2023-Elections.png"];

    return (
      <section className="impAnnouncements-tease">
        <div className="content">
          <div className="title">Academic Year 2022-2023</div>
          <div className = "video-header">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6E9kewdhFvU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe></div>
          <div className="description border-bottom">
            <p>
              Communications will be done via email, Discord, and social media
            </p>
          </div>
          <br></br>

          <Row id="event-container">
              <Col md={6} id="upcoming-flyer" class="text-center">
                <div className="event-section">
                <h1 className="upcoming-title">Upcoming events</h1>
                <p className="event-description">
                  Don't miss out with these events! See our
                  <br />
                  calendar for more details.
                </p>
                <Carousel infiniteLoop className="flyer-container">
                  {upcomingPosters.map((value, index) => {
                    return (
                      <div>
                        <img
                          className="carousel-event-image"
                          src={require("" + value)}
                          alt="event"
                        />
                      </div>
                    );
                  })}
                </Carousel></div>
              </Col>
              <Col md={6} id="featured-flyer" class="text-center">
                <div className = "event-section">
                <h1 className="featured-title">Featured Events</h1>
                <p className="event-description">
                  For Spring 2023, ACM will be offering <br />
                  scholarships and professional workshops!
                </p>
                <Carousel infiniteLoop className="flyer-container">
                  {eventPosters.map((value, index) => {
                    return (
                      <div>
                        <img
                          className="carousel-event-image"
                          src={require("" + value)}
                          alt="event"
                        />
                        <Button
                          href={links[index]}
                          style={{ backgroundColor: "#0A84FF" }}
                        >
                          Apply Now!
                        </Button>
                      </div>
                    );
                  })}
                </Carousel></div>
              </Col>
          </Row>

          
        </div>
      </section>
    );
  }
}

export default ImpAnnouncements;
