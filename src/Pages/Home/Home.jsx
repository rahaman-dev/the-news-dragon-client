import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadData = useLoaderData();
  console.log(loadData);

  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default Home;
