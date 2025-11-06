import React from "react";

function About() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success fw-bold">About Us</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiwvUpP85plURhHXF5xgI_axZj6t9GVpAkw&s"
        alt="React Home"
        className="img-fluid rounded shadow mt-3"
        style={{ maxWidth: "600px" }}
      />
      <p className="lead mt-3">
        We are a creative web development team passionate about building modern,
        responsive, and user-friendly React websites.
      </p>
    </div>
  );
}

export default About;
