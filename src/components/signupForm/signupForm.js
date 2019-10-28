import React, { useState } from "react";

import "./signupForm.scss";

function SignupForm() {
  const [email, setEmail] = useState('');
  const [seriousInterestBro, setSeriousInterestBro] = useState(false)

  const updateEmail = (event) => {
    setEmail(event.target.value)
  }

  const setInterestLevel = () => {
    setSeriousInterestBro(!seriousInterestBro)
  }

  const submitForm = () => {
    // TODO: submit interest with email and seriousInterestBro
  }

  return (
    <div className="signupForm">
      <h2>Interested in learning more?</h2>
      <h5>Sign up with your email and we'll reach out when we have more information to share!</h5>
      <label className="container">
        Interested in signup up for our first cohort? Check here!
      <input type="checkbox" checked={seriousInterestBro} onChange={setInterestLevel} />
      <span className="checkmark" />
    </label>
      <input className="email-input" value={email} onChange={updateEmail} />
      <button className="submit-button" onClick={submitForm}>Submit</button>
    </div>
  );
}

export default SignupForm;
