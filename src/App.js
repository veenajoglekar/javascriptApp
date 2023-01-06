import logo from "./logo.svg";
import "./App.css";
import profileService from "./services/profile.service";
import React, { Component, useEffect, useState } from "react";
import HomePage from "./views/HomePage";
import ProfilePage from "./views/ProfilePage";

function App() {
  const [show, setShow] = useState(false);

  const parentCallback = (profile) => {
    console.log(`Profile selected : ${profile.name}`)
    setShow(true)
  }

  // const routing = useRoutes(routes);
  return (
    <>
      {!show ? (
        <div style={{minHeight: '100%'}} className="homepage">
          <HomePage parentCallback={parentCallback} />
        </div>
      ) : (
        <div style={{minHeight: '100%'}} className="profile">
          <ProfilePage />
        </div>
      )}

      {/* <AxiosSetup />
          {routing} */}
    </>
  );
}

export default App;
