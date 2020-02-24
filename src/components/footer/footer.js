import React, { useState } from "react";
import logo from "images/logo/logo_favicon_outline.png";
import { Link } from "react-router-dom";

import MailchimpForm from "./components/mailchimpForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "./footer.scss";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const url =
    "https://gmail.us11.list-manage.com/subscribe/post?u=33c7e4c6b7d5ec19fb04c791f&amp;id=0408f6cdfb";

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="footer">
      <div className="footer-logoSignupContainer">
        <div className="footer-row">
          <img src={logo} className="footer-logo" alt="logo" />
          <p className="footer-contact-text">
            Contact us at contact@codeinbali.com
          </p>
        </div>
        <div>
          <p className="footer-signupText">
            Join Our Mailing List to Receive the Latest News & Upcoming Events
          </p>
          <div className="footer-flex">
            <input
              className="footer-formInput"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Name"
            />
            {nameError && <p className="footer-error">Name is required</p>}
            <input
              className="footer-formInput"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Email"
            />
            {emailError && (
              <p className="footer-error">A valid email is required</p>
            )}
            <input
              className="footer-formInput"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              placeholder="Phone Number"
            />
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <MailchimpForm
                  status={status}
                  message={message}
                  onValidated={subscribe}
                  resetForm={resetForm}
                  email={email}
                  name={name}
                  phone={phone}
                  setEmailError={setEmailError}
                  setNameError={setNameError}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottomContainer">
        <div className="footer-bottomContainer-column">
          <h3 className="footer-bottomContainer-column-header">Get started</h3>
          <Link to="/admission" className="footer-link">
            <p className="footer-bottomContainer-column-text">
              Admission Process
            </p>
          </Link>
        </div>
        <div className="footer-bottomContainer-column">
          <h3 className="footer-bottomContainer-column-header">More</h3>
          <Link to="/faq" className="footer-link">
            <p className="footer-bottomContainer-column-text">FAQ</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
