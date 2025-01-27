import React from "react";
import SectionHeader from "../components/SectionHeader/index";
import { AppContext } from "../App";

export default function Contact() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      className="contact"
      id="contact"
      ref={(element) => (sectionRefs.current[5] = element)}
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            <span className="dark-bg--normal-word">Stay</span>{" "}
            <span className="orange--word">Connected</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>

        <div className="maincontact">
          {/* Map Container */}
          <div className="contact--map">
            <iframe
              title="Mumbai Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.037126537248!2d72.82674352224442!3d19.076065320838105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91d7a4a0f7d%3A0x91be03d99a83f67b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1674740125221!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="contact--form">
            <div className="contact--form-userInfo">
              <input
                type="text"
                placeholder="Your Name*"
                name="username"
                id="username"
                className="contact--form-username"
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                name="email"
                id="email"
                className="contact--form-email"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              className="contact--form-subject"
              required
            />
            <fieldset>
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                className="contact--form-message"
                required
              ></textarea>
            </fieldset>
            <button className="main--button">send message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
