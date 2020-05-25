//this will make a get request to display all the pickups
import React, { useState, useEffect } from "react";
//import Moment from 'react-moment';
//import moment from 'moment';

import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

import "../styles/pickup-list.css"

let fakePickups = [
  {
    type: "Bread",
    amount: "1 pound",
    pickUpTime: "May 2, 2022",
    business: "Target",
  },
  {
    type: "Eggs",
    amount: "2 carts",
    pickUpTime: "July 4, 2023",
    business: "Safeway",
  },
  {
    type: "Chips",
    amount: "16 bags",
    pickUpTime: "September 2, 2022",
    business: "Ikea",
  },
  {
    type: "Soda",
    amount: "2 liters",
    pickUpTime: "October 2, 2022",
    business: "Walmart",
  },
];

const PickUpList = () => {
  const [pickups, setPickups] = useState(fakePickups);

  const { push } = useHistory();

  return (
    <div>
      <div className="pickup-container">
        {pickups.map((pickup) => (
          <div className="pickups">
            <h2>{pickup.type}</h2>
            <h2>{pickup.business}</h2>
            <h2>{pickup.pickUpTime}</h2>
            <h2>{pickup.business}</h2>
            <button>Accept</button>
          </div>
        ))}
      </div>
      <button onClick={() => push("/volunteer-profile")}>
        Back to Profile
      </button>
    </div>
  );
};

export default PickUpList;
