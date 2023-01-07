import logo from "./logo.svg";
import "./App.css";
import profileService from "./services/profile.service";
import React, { Component, useEffect, useState } from "react";
import HomePage from "./views/HomePage";
import ProfilePage from "./views/ProfilePage";

function App() {
  const [show, setShow] = useState(false);
  const [profile, setProfile ] = useState({});

  const parentCallback = (profile) => {
    console.log(`Profile selected : ${profile.name}`)
    setProfile(profile)
    setShow(true)
  }

  // const routing = useRoutes(routes);
  return (
    <>
      {!show ? (
        <div style={{minHeight: '100%'}} className="homepage ht-100">
          <HomePage parentCallback={parentCallback} />
        </div>
      ) : (
        <div style={{minHeight: '100%'}} className="profile ht-100">
          <ProfilePage profileData={profile} />
        </div>
      )}

      {/* <AxiosSetup />
          {routing} */}
    </>
  );
}

export default App;
