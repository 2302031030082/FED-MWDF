import React from "react";

function Contact() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-danger fw-bold">Contact Us</h1>
      <p className="lead mt-3">Feel free to reach out to us for collaboration or feedback!</p>
      <form className="mx-auto mt-4" style={{ maxWidth: "500px" }}>
        <input type="text" className="form-control mb-3" placeholder="Your Name" required />
        <input type="email" className="form-control mb-3" placeholder="Your Email" required />
        <textarea className="form-control mb-3" rows="3" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-warning w-100 fw-bold">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
