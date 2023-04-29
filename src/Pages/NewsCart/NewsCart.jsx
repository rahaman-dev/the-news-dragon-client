import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import {
  FaBeer,
  FaRegStar,
  FaRegStarHalf,
  FaStar,
  FaStarOfDavid,
} from "react-icons/fa";

const NewsCart = ({ news }) => {
  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <Card className="">
      <Card.Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }} className="left">
            <Image
              src={author?.img}
              roundedCircle
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <div className="rr">
              <h6 style={{ fontSize: "12px" }}>{author.name}</h6>
              <h6 style={{ fontSize: "12px" }}>
                {moment(author?.published_date).format("yyyy-MM-d")}
              </h6>
            </div>
          </div>
          <div className="right">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "25px", margin: "0 10px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "25px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </span>
          </div>
        </div>
      </Card.Header>

      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>see more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-item-center justify-content-between">
        <p>
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span style={{ marginLeft: "5px" }}> {rating.number}</span>
        </p>
        <p>{total_view}</p>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
