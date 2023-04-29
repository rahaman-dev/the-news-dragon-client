import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const NewsDetails = () => {
  const loadData = useLoaderData();
  const { category_id, title, image_url, details } = loadData;

  return (
    <div>
      <Image
        rounded
        src={image_url}
        style={{ width: "789px", height: "411px", marginRight: "10px" }}
      />
      <h2 className="my-3"> {title}</h2>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`} className="btn btn-primary">
          <FaArrowLeft style={{ marginRight: "8px" }}></FaArrowLeft>
          All news in this category
        </Link>
      </Card.Body>
      <EditorsInsight loadData={loadData}></EditorsInsight>
    </div>
  );
};

export default NewsDetails;
