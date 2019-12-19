import React, { useState, useEffect } from "react";
import MailchimpForm from './components/mailchimpForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./signupForm.scss";

function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const url = "https://gmail.us11.list-manage.com/subscribe/post?u=33c7e4c6b7d5ec19fb04c791f&amp;id=0408f6cdfb";

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div className="signupForm">
      <h2 className="signupForm-header">Reinvent your career</h2>
      <p className="signupForm-description">Banyan code school is led by experienced egineering leaders and hiring managers. We produce Software Engineers the best teams want to hire.</p>
      <input className="signupForm-formInput" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      {
        nameError && <p className="signupForm-error">Name is required</p>
      }
      <input className="signupForm-formInput" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      {
        emailError && <p className="signupForm-error">A valid email is required</p>
      }
      <input className="signupForm-formInput" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" />
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
  );
}

export default SignupForm;
