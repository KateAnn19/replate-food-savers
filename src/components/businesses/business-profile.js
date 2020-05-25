//this will display a particular businesse's profile
//the business will be able to edit their profile which includes their name, phone number and address
//if the business updates any of their information the updated information will also effect the pickups they
//have in progress whether it is accepted by a volunteer or if it is on the pickup list unassigned
//the business will be able to edit or delete pickups they have created
//the businesse's profile will display the pickups they have created along with the volunteer info that has agreed to pick it up ////if a volunteer is assigned and if a volunteer is not assigned then this information is blank
//the pickups data will include ...
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//styles
import "../styles/pickups.css";

let fakeProfile = {
  name: "Ikea",
  username: "Ikea-Gives",
  phone: "777-333-2222",
  address: "2 Swedish Lande, CA 7315",
  role: "donor",
};

let fakePickups = [
  {
    type: "Bread",
    amount: "2 pounds",
    pickupTime: "May 3, 2022",
  },
  {
    type: "Fruit",
    amount: "6 pounds",
    pickupTime: "June 5, 2022",
  },
  {
    type: "Cereal",
    amount: "5 pounds",
    pickupTime: "June 23, 2022",
  },
];

function BusinessProfile() {
  const [profile, setProfile] = useState(fakeProfile);
  const [pickups, setPickups] = useState(fakePickups);

  console.log(pickups);

  const { push } = useHistory();

  //edit profile
  //delete profile
  //add pickup
  //edit pickup
  //delete pickup

  const editBusProfile = () => {};

  const editPickup = () => {};

  const deleteBusProfile = () => {};

  return (
    <div>
      <h3>{profile.name}</h3>
      <h3>{profile.address}</h3>
      <h3>{profile.phone}</h3>
      <h3>{profile.username}</h3>
      <h2>Current Pickups</h2>
      <div className="container">
        {pickups.map((pickup) => (
          <div className="pickups">
            <div className="pickups-container">
              <h2>{pickup.type}</h2>
              <h2>{pickup.amount}</h2>
              <h2>{pickup.pickupTime}</h2>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => push("/add-pickup")}>Add Pickup</button>
      <button onClick={editBusProfile}>Edit Profile</button>
      <button onClick={deleteBusProfile}>Delete Profile</button>
    </div>
  );
} //end businessProfile

export default BusinessProfile;
