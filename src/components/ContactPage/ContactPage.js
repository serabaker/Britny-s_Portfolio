import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div id="Contact">
      <div className="contact wrapper">
        <h1> Let's Connect</h1>
        <form method="post">
          <label> First Name</label>
          <input type="text" />
          <label> Last Name</label>
          <input type="text" />
          <label> Email addresss</label>
          <input type="email" />
          <button>Connect</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
