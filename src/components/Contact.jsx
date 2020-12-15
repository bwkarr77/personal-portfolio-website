import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contact);

    // fetch("http://localhost:3001", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   header: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   });
    axios({
      method: "POST",
      url: "http://localhost:3001/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  return (
    // console.log("contact form: ", contact),
    <article id="contact">
      <h2 className="major">Contact</h2>
      <form method="post" action="#" onSubmit={handleSubmit}>
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={contact.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="primary" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        {/* <li><a href="#" className="icon brands fa-twitter" target="_blank" rel="noopener noreferrer"><span className="label">Twitter</span></a></li> */}
        <li>
          <a
            href="https://www.facebook.com/bkarr"
            className="icon brands fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bwkarr77/?hl=en"
            className="icon brands fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bwkarr77"
            className="icon brands fa-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Contact;
