import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
  const { id } = useParams();
  const loadData = useLoaderData();
  console.log(loadData);

  return (
    <div style={{ marginTop: "50px" }}>
      {loadData &&
        loadData.map((news, idx) => (
          <NewsCart key={idx} news={news}></NewsCart>
        ))}
    </div>
  );
};

export default Category;
