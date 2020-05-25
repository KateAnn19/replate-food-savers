import React, { useState } from "react";
import "./styles/App.css";
import Login from "./login";
import Logout from "./logout";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute";

import VolunteerRegistration from "./volunteers/volunteer-registration";
import BusinessRegistration from "./businesses/business-registration";

import BusinessProfile from "./businesses/business-profile";
import AddPickup from "./businesses/addPickup";

import VolunteerProfile from "./volunteers/volunteer-profile";
import PickUpList from "./volunteers/pickup-list";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
      </nav>
      <nav>
        <Link to="/logout">Logout</Link>
      </nav>
      <Switch>
        {/* <ProtectedRoute exact path='/friendsList' component={FriendsList}/> */}
        <Route exact path="/" component={Login} />

        <Route
          path="/volunteer-registration"
          component={VolunteerRegistration}
        />
        <Route path="/business-registration" component={BusinessRegistration} />
        <Route path="/business-profile" component={BusinessProfile} />
        <Route path="/add-pickup" component={AddPickup}/>

        <Route path="/volunteer-profile" component={VolunteerProfile}/>
        <Route path="/pickup-list" component={PickUpList}/>

        <Route path="/logout" component={Logout} />
        
      </Switch>
      
    </div>
  );
}

export default App;
