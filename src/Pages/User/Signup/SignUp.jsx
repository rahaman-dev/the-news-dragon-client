import React, { useState, useContext } from "react";
// import "./singup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { faC } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);

  const [error, setError] = useState();
  const [showPass, setShowPass] = useState("password");
  const [accepted, setAccepted] = useState(false);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const firstName = event.target.firstName.value;
    // const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const photo = event.target.photo.value;
    event.target.reset("");
    setError("");

    if (password !== confirmPassword) {
      setError("Invalid Confirm Password");
      return;
    }
    if (password < 8) {
      setError("password wil be  minimum 8 character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("password have must be one uppercase");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("password must me have on digit");
      return;
    } else if (!/(?=.*[^\da-zA-Z])/.test(password)) {
      setError("password must me have on spacial character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const cratedUser = result.user;
        console.log(cratedUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "80px 0" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            First Name:
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Last Name :
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Photo :
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="photo"
            placeholder="Your Photo URL"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div style={{ marginBottom: "20px", position: "relative" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type={showPass}
            name="password"
            placeholder="Password"
            required
          />
          <FaEye
            onClick={handleShowPass}
            style={{
              width: "25px",
              position: "absolute",
              left: "460px",
              bottom: "15px",
            }}
          ></FaEye>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Confirm Password:
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div>
          <label>
            <input type="checkbox" onClick={handleAccepted} /> Accept
            <Link to="/termsAndCondition">Our Terms And Condition</Link>
          </label>
        </div>
        <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
        <button
          style={{
            backgroundColor: "#A7A7A7",
            color: "000",
            fontWeight: "bolder",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
          disabled={!accepted}
        >
          Sign Up
        </button>
      </form>

      <div style={{ marginTop: "10px" }}>
        Already Have An Account?{" "}
        <Link
          to="/login"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
