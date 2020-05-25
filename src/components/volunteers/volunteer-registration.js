import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";

let initialState = {
  username: "",
  password: "",
  role: "volunteer",
  name: "",
  phone: "",
};

const VolunteerRegistration = () => {
  const [values, setValues] = useState(initialState);
  const { push } = useHistory();

  console.log(values);

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
        if (err.response.status === 500) {
        } //end if
      });
  };
  useEffect(() => {
    // if (typeof status === "object" && status !== undefined) {
    //   status &&
    //     values.setCreateUser({
    //       ...values.createUser,
    //       ...status,
    //     });
    //   setIsError(false);
    //   setMessage("Successful Registration");
    // } else if (status === "duplicate") {
    //   setIsError(true);
    //   setMessage("That user already exists");
    // }
  }, []);
  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
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
            placeholder="Phone"
          />
        </label>

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
      
    </div>
  );
};

export default VolunteerRegistration;
