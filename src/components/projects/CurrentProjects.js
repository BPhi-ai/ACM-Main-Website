import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Collapse,
  Container,
  Carousel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./currentprojects.css";

const CurrentProjects = (props) => {
  const [begInfoButton, setBegInfo] = useState("More");
  const [advInfoButton, setAdvInfo] = useState("More");
  const [begOpen, setBegOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);

  const infoButtonHandler = (projType) => {
    if (projType === "beg") {
      setBegOpen(!begOpen);
      if (begOpen) {
        setBegInfo("More");
      } else {
        setBegInfo("Less");
      }
    } else {
      setAdvOpen(!advOpen);
      if (advOpen) {
        setAdvInfo("More");
      } else {
        setAdvInfo("Less");
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card id="beginner-card" border="secondary" className="text-center">
            <Card.Img
              variant="top"
              src={props.current.level.beginners.flyer}
              class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
            />
            <Card.Body>
              <Card.Title className="shadow mb-3">
                Beginners Workshop
              </Card.Title>
              <Card.Text>
                Interested of making your own website portfolio? In this
                workshop series, we will be using HTML and CSS to create your
                very own portfolio, to which it could be used with resumes in
                the workforce!
                <Collapse in={begOpen}>
                  <div>
                    <div class="skills-section my-4">
                      <h4 class="skill-header">You will learn:</h4>
                      {props.current.level.beginners.skills.map((skill) => (
                        <div>
                          <Icon.CaretRightFill className="d-inline" />
                          <span>{skill}</span>
                          <Icon.CaretLeftFill className="d-inline" />
                        </div>
                      ))}
                    </div>
                    <div class="leaders-section">
                      <h4 class="leaders-header">Leaders:</h4>
                      <Carousel class="current-carousel">
                        {props.current.level.beginners.leaders.map(
                          ({ img, name }) => (
                            <Carousel.Item>
                              <img src={img}></img>
                              <Carousel.Caption>
                                <h4 class="leadername">{name}</h4>
                              </Carousel.Caption>
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>
                    </div>
                  </div>
                </Collapse>
              </Card.Text>
              <Button
                onClick={(e) => infoButtonHandler(e.target.value)}
                aria-expanded={begOpen}
                variant="primary"
                size="sm"
                value={"beg"}
              >
                {begInfoButton}
              </Button>
              <Button
                variant="success"
                href="https://forms.gle/xw8zgCeCFaWhRPbV9"
                size="sm"
              >
                Join Now!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card id="advance-card" border="secondary" className="text-center">
            <Card.Img
              variant="top"
              src={props.current.level.advanced.flyer}
              class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
            />
            <Card.Body>
              <Card.Title className="shadow mb-3">Advanced Workshop</Card.Title>
              <Card.Text>
                Interested in game development? In this workshop series, we are
                using Java and Forge to create and implement a mod that will be
                used in Minecraft, one of the most played games in gaming
                history.
                <Collapse in={advOpen}>
                  <div>
                    <div class="skills-section my-4">
                      <h4 class="skill-header">You will learn:</h4>
                      {props.current.level.advanced.skills.map((skill) => (
                        <div>
                          <Icon.CaretRightFill className="d-inline" />
                          <span>{skill}</span>
                          <Icon.CaretLeftFill className="d-inline" />
                        </div>
                      ))}
                    </div>
                    <div class="leaders-section">
                      <h4 class="leaders-header">Leaders:</h4>
                      <Carousel>
                        {props.current.level.advanced.leaders.map(
                          ({ img, name }) => (
                            <Carousel.Item>
                              <img src={img}></img>
                              <Carousel.Caption>
                                <h4 class="leadername">{name}</h4>
                              </Carousel.Caption>
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>
                    </div>
                  </div>
                </Collapse>
              </Card.Text>
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => infoButtonHandler(e.target.value)}
                aria-expanded={advOpen}
                value={"adv"}
                className="shadow"
              >
                {advInfoButton}
              </Button>
              <Button
                variant="success"
                href="https://forms.gle/xw8zgCeCFaWhRPbV9"
                size="sm"
              >
                Join Now!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentProjects;
