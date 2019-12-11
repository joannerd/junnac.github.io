import React from "react";

const Contact = () => (
  <article id="contact">
    <h2>Contact</h2>
    <section>
      <div>
        Feel free to contact me about collaboration opportunities, questions, or just to say hi.
      </div>

      <div className="contact-links">
        <a href="mailto:x.chenj@gmail.com"
          target="_blank"
          rel="noopener noreferrer">x.chenj@gmail.com</a>
        <a href="https://www.linkedin.com/in/xchenj/"
          target="_blank"
          rel="noopener noreferrer">linkedin.com/in/xchenj</a>
        <a href="https://angel.co/xchenj"
          target="_blank"
          rel="noopener noreferrer">angel.co/xchenj</a>
        <a href="https://github.com/junnac"
          target="_blank"
          rel="noopener noreferrer">github.com/junnac</a>
      </div>
    </section>

    <a href="#home" className="fas fa-chevron-up">{null}</a>
  </article>
)

export default Contact;