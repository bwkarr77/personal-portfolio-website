import React from "react";

const Contact = () => {
  return (
    <article id="contact">
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
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
