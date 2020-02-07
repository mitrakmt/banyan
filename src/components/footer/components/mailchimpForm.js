import React, { useEffect } from "react";

import "../footer.scss";

function MailchimpForm({ status, message, onValidated, resetForm, email, name, phone, setEmailError, setNameError }) {
  useEffect(() => {
    if (status === 'success') {
      resetForm()
    }
  }, [status, resetForm])

  const submit = () => {
    if (email.indexOf("@") < 0) {
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
      <button className="footer-submit" onClick={submit}>Sign Up</button>
      {
        !message && <p className="footer-message">{message}</p>
      }
    </div>
  );
}

export default MailchimpForm;
