import React from 'react';
import { useHistory } from 'react-router-dom';

//imports
//import "./Logout.css";

export default function Logout() {
  const history = useHistory();

  window.localStorage.removeItem('token');
  window.localStorage.removeItem('loggedInUser');
  //setLoggedInUser('');
  //setTimeout, then redirect to login
  window.setTimeout(() => {
    history.push('/');
  }, 2000)

  return (
    <div className="logout">
      <h1>Thanks for using Replate</h1>
    </div>
  )
}//end logOut
