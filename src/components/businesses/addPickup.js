//this is a form that will allow the business to add a pickup to their profile
//when the business creates a new pickup it will also display on the pickup list 
//it will also display on the business profile

import React, { useState, useEffect } from "react";
//import Moment from 'react-moment';
//import moment from 'moment';

import { useHistory } from "react-router-dom";

import { axiosWithAuth } from '../../utils/axiosWithAuth';

let initialState = {
    amount: '',
    pickupTime: '',
    businessId: '',
    type: ''
}

const AddPickup = () => {
const [newPickup, setPickup] = useState(initialState);

const { push } = useHistory();

console.log(newPickup)

const handleChange = (e) => {
    setPickup({
        ...newPickup,
        [e.target.name]: e.target.value
    });
  };
  

const addPickup = e => {
    axiosWithAuth()
    .post("/api/", newPickup)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    });
}

 

  return (
    <div className="addPlateForm">
      <form onSubmit={addPickup}>
        <label htmlFor="type">Type</label>
        <input id="type" type="text" name="type" onChange= {handleChange} placeholder="type"/>

        <label htmlFor="amount">Amount</label>
        <input id="amount" type="text" onChange= {handleChange} name="amount" placeholder="amount"/>
    
        <label htmlFor="pickupTime">Pickup Time</label>
        <input id="pickupTime" onChange= {handleChange} type="text" name="pickupTime" placeholder="pickup time"/>
        

        <label htmlFor="id">Business Id</label>
        <input
          id="businessId"
          type="text"
          name="businessId"
          placeholder="Business Id"
          onChange= {handleChange}
        />
       
        <button type="submit">Add Pickup</button>
      </form>
      <button onClick={() => push('/business-profile')}>Back To Profile</button>
    </div>
  );
};



 
  
   

  
export default AddPickup;




