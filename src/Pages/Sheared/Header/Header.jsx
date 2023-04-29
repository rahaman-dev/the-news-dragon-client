import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src={logo} alt="" className="mr-auto" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM d, YYYY")}</p>
      </div>

      <div className="d-flex">
        <button className="bg-danger border border-none text-white h-3 p-2">
          Latest
        </button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text..... I can be a React component, multiple React components, or
          just some text..... I can be a React component, multiple React
          components, or just some text..... I can be a React component,
          multiple React components, or just some text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
