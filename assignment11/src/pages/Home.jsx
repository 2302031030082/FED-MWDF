import React from "react";

function Home() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-primary fw-bold">Welcome to Naruto Anime!</h1>
      <p className="lead mt-3">
        This is the Home page — built using React Router and Bootstrap.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVotDr-6t_esIV2pSH9VGX9_Nl_x3b7eWdfA&s"
        alt="React Home"
        className="img-fluid rounded shadow mt-3"
        style={{ maxWidth: "600px" }}
      /><br/><br/>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwt3fKpGenYDh1OuctUugfifac7jQyltNNg&s"
        alt="React Home"
        className="img-fluid rounded shadow mt-3"
        style={{ maxWidth: "600px" }}
      />



    </div>
  );
}

export default Home;
