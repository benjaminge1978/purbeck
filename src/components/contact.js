import React from "react"
import "./contact.css"

export const Contact = () => {
  return (
    <section >
      <div className="contact-wrapper">
        <form action="">
          <div>
              <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="text"
              email="email"
              id="email"
              placeholder="Email@email.com"
            />
          </div>
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Message"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
