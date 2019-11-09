import React, { useState } from "react";

import "./signupForm.scss";

function SignupForm() {
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [seriousInterestBro, setSeriousInterestBro] = useState(false)

  const updateState = (event) => {
    let newState = {...state, ...{ [event.target.id]: event.target.value }}
    setState(newState)
  }

  const setInterestLevel = () => {
    setSeriousInterestBro(!seriousInterestBro)
  }

  const submitForm = () => {
    // TODO: submit interest with email and seriousInterestBro
  }

  return (
    <div className="signupForm">
      <h2 className="signupForm-header">Reinvent your career</h2>
      <p className="signupForm-description">Banyan code school is led by experienced egineering leaders and hiring managers. We produce Software Engineers the best teams want to hire.</p>
      {/* <label className="container">
        Interested in signup up for our first cohort? Check here!
      <input type="checkbox" checked={seriousInterestBro} onChange={setInterestLevel} />
      <span className="checkmark" />
      </label> */}
      <input className="signupForm-formInput" value={state.firstName} onChange={updateState} placeholder="First Name" id="firstName" />
      <input className="signupForm-formInput" value={state.lastName} onChange={updateState} placeholder="Last Name" id="lastName" />
      <input className="signupForm-formInput" value={state.email} onChange={updateState} placeholder="Email" id="email" />
      <input className="signupForm-formInput" value={state.phone} onChange={updateState} placeholder="Phone Number" id="phone" />
      <button className="signupForm-submit" onClick={submitForm}>Request Info</button>
    </div>
  );
}

export default SignupForm;
