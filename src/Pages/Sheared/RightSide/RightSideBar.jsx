import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div style={{ width: "18rem" }}>
      <h4 style={{ marginTop: "50px" }}>Login With</h4>
      <Button variant="border border-primary mb-2 text-primary" size="lg">
        <FontAwesomeIcon icon="fa-brands fa-github" />
        Login With GitHub
      </Button>
      <Button variant="border border-dark" size="lg">
        <FontAwesomeIcon icon="fa-brands fa-google" />
        Login With Google
      </Button>
      <h4 style={{ marginTop: "20px" }}>Find Us On</h4>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <h5>Facebook</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fa-brands fa-github"></i>
            <h5>Twitter</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <h5>Instagram</h5>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div>
        <h4 style={{ marginTop: "20px" }}>Q-Zone</h4>
        <img src={qZone1} alt="" style={{ width: "18rem" }} />
        <img src={qZone2} alt="" style={{ width: "18rem" }} />
        <img src={qZone3} alt="" style={{ width: "18rem" }} />
      </div>
      <div
        className="text-center bg-dark text-white p-2"
        style={{ height: "400px" }}
      >
        <h2 style={{ marginTop: "50px" }}>Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Secondary</Button>{" "}
      </div>
    </div>
  );
};

export default RightSideBar;
