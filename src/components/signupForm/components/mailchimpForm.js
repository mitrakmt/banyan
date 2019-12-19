import React, { useState, useEffect } from "react";

import "../signupForm.scss";

function MailchimpForm({ status, message, onValidated, resetForm, email, name, phone, setEmailError, setNameError }) {
  useEffect(() => {
    if (status === 'success') {
      resetForm()
    }
  }, [status, resetForm])

  const submit = () => {
    if (!email.indexOf("@") > -1) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    if (!name) {
      // handle first name error
      setNameError(true)
      return;
    }
    setNameError(false)

    onValidated({
      EMAIL: email,
      NAME: name,
      PHONE: phone
    });
  }

  return (
    <div>
      <button className="signupForm-submit" onClick={submit}>Request Info</button>
      {
        !message && <p className="signupForm-message">{message}</p>
      }
    </div>
  );
}

export default MailchimpForm;
