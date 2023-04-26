import React from "react";
import Header from "../Pages/Sheared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightSideBar from "../Pages/Sheared/RightSide/RightSideBar";
import LeftSideBar from "../Pages/Sheared/LeftSide/LeftSideBar";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col lg={6}>
            <h2>Main Content</h2>
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

export default MainLayout;
