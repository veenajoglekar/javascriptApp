import { GoogleApiWrapper, Map } from "google-maps-react";
import React, { Component, useEffect } from "react";

const MyMap = ({ lat, lng }) => {
    var coords;
    useEffect(() => {
        coords = { lat: lat, lng: lng };
    }, [])
    
  const mapStyles = {
    width: "600px",
    height: "400px",
  };

  return (
    <>
      <Map
        google={window.google}
        zoom={14}
        style={mapStyles}
        initialCenter={coords}
        // {
        //     lat: lat, //profileData?.address?.geo.lat,
        //     lng: lng, //profileData?.address?.geo.lng
        //   }
      />
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZHXAXwMAKvC2tkhmJlSpCMrAUQr4Smu0",
})(MyMap);
