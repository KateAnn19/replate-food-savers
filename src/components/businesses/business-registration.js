import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";

let initialState = {
  username: "",
  password: "",
  role: "donor",
  name: "",
  address: "",
  phone: "",
};

const BusinessRegistration = () => {
  const [values, setValues] = useState(initialState);
  console.log(values);
  const { push } = useHistory();

  const changeHandler = (ev) => {
    ev.persist();
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://replater.herokuapp.com/api/auth/register", values)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user-form">
      <form>
        <label htmlFor="username">
          Business Name
          <input
            id="name"
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="name"
          />
        </label>
        <label htmlFor="username">
          User Name
          <input
            id="username"
            onChange={changeHandler}
            type="text"
            name="username"
            placeholder="username"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            onChange={changeHandler}
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            onChange={changeHandler}
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
        </label>
        <label htmlFor="address">
          Address
          <input
            id="address"
            onChange={changeHandler}
            type="text"
            name="address"
            placeholder="address"
          />
        </label>

        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default BusinessRegistration;
