import React from "react";
import Header from "../Pages/Sheared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightSideBar from "../Pages/Sheared/RightSide/RightSideBar";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSideBar></RightSideBar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
