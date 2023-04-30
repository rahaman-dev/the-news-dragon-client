import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-three-kappa.vercel.app/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h4
        style={{
          backgroundColor: "#403F3F",
          padding: "10px",
          color: "white",
        }}
      >
        All Category
      </h4>
      {categories.map((category) => (
        <h6 key={category.id} style={{ lineHeight: "25px" }}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none text-secondary"
          >
            {category.name}
          </Link>
        </h6>
      ))}
    </div>
  );
};

export default LeftSideBar;
