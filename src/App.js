import logo from "./logo.svg";
import "./App.css";
import profileService from "./services/profile.service";
import React, { Component, useEffect, useState } from "react";
import HomePage from "./views/HomePage";
import ProfilePage from "./views/ProfilePage";

function App() {
  const [show, setShow] = useState(false);
  const [profile, setProfile ] = useState({});
  const [nextArr, setNextArr ] = useState([]);
  const [ profileArr, setProfileArr ] = useState([]);

  useEffect(
    () => {
      getProfileList();
    }, []
  )

  const getProfileList = () => {
    profileService.getProfileList().then(
      (res) => {
        setProfileArr(res.users);
      }
    )
  }

  const parentCallback = (profile) => {

    if(profile){
      console.log(`Profile selected : ${profile.name}`)
      setProfile(profile)
      let index = profileArr.findIndex( (x) => {
        return x.id === profile.id
      });
      let next2 = [];
      if(profileArr.length > index + 2 ){
        next2 = [ profileArr[index + 1], profileArr[index + 2]];
      }else if( profileArr.length === index + 2){
        next2 = [ profileArr[index + 1], profileArr[0]]
      }else{
        next2 = profileArr.slice(0,2)
      }
      setNextArr(next2);
      setShow(true)
    }else{
      setNextArr([])
      setProfile({})
      setShow(false)
    }
  }

  // const routing = useRoutes(routes);
  return (
    <>
      {!show ? (
        <div style={{minHeight: '100%'}} className="homepage ht-100">
          <HomePage profiles={profileArr} parentCallback={parentCallback} />
        </div>
      ) : (
        <div style={{minHeight: '100%'}} className="profile ht-100">
          <ProfilePage profileData={profile} nextArr={nextArr} parentCallback={parentCallback} />
        </div>
      )}

      {/* <AxiosSetup />
          {routing} */}
    </>
  );
}

export default App;
