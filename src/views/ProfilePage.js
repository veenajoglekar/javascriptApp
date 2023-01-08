import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component, useEffect, useState } from "react";
import MyMap from "./MyMap";

const ProfilePage = ({ profileData, nextArr, parentCallback }) => {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [showPopup, setShowPopup] = useState(false);
  const mapping = {
    profile: "Profile",
    posts: "Posts",
    gallery: "Gallery",
    todo: "ToDo",
  };

  useEffect(() => {}, [profileData]);

  const openPopup = () => {
    setShowPopup(!showPopup)
  };

  const openProfile = (profile) => {
    setShowPopup(false)
    parentCallback(profile);
  };

  const logout = () => {
    parentCallback(false);
  }

  return (
    <>
      <div className="container-fluid ht-100" onClick={() => { showPopup && setShowPopup(false)}}>
        <div className="custom-grid">
          <div className="sidebar ht-100">
            <div className="inner-sidebar d-flex align-items-center">
              <div className="custom-nav w-100">
                <ul className="margin-lr">
                  <li
                    onClick={() => setSelectedMenu("profile")}
                    className="d-flex w-100"
                  >
                    <a
                      className={
                        selectedMenu === "profile" ? "active" : "inactive"
                      }
                    >
                      Profile
                    </a>{" "}
                  </li>
                  <li
                    onClick={() => setSelectedMenu("posts")}
                    className="d-flex w-100"
                  >
                    <a
                      className={
                        selectedMenu === "posts" ? "active" : "inactive"
                      }
                    >
                      Posts
                    </a>{" "}
                  </li>
                  <li
                    onClick={() => setSelectedMenu("gallery")}
                    className="d-flex w-100"
                  >
                    <a
                      className={
                        selectedMenu === "gallery" ? "active" : "inactive"
                      }
                    >
                      Gallery
                    </a>{" "}
                  </li>
                  <li
                    onClick={() => setSelectedMenu("todo")}
                    className="d-flex w-100"
                  >
                    <a
                      className={
                        selectedMenu === "todo" ? "active" : "inactive"
                      }
                    >
                      ToDo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-body ht-100">
            <div className="container mt-5">
              <div className="row">
                <div
                  className="col-2"
                  style={{ marginLeft: "40px", width: "20%" }}
                >
                  <h4>{mapping[selectedMenu]}</h4>
                </div>
                <div className="col-3 offset-6" style={{ marginLeft: "auto" }}>
                  <li
                    onClick={() => openPopup()}
                    className="row align-items-center cp"
                  >
                    <div className="col-1">
                      <img
                        className="imgRnd"
                        style={{ height: "30px", width: "30px" }}
                        src={profileData.profilepicture}
                      />
                    </div>
                    <h6 className="col-8 offset-1 pt-2">{profileData.name}</h6>
                  </li>
                </div>
              </div>
            </div>
            <hr style={{ marginLeft: "40px", marginRight: "40px" }}></hr>
            {selectedMenu === "profile" ? (
              <>
                <div className="cust-grid">
                  <div style={{ borderRight: "1px silver solid" }}>
                    <div className="just-center">
                      <img
                        src={profileData.profilepicture}
                        style={{ height: "220px", width: "220px" }}
                        className="imgRnd"
                      ></img>
                      <h5 className="mt-4 glasstext">{[profileData.name]}</h5>
                      <div className="mt-4 mb-4">
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            Username :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData.username}
                          </h5>
                        </div>
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            Email :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.email}
                          </h5>
                        </div>
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            Phone :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.phone}
                          </h5>
                        </div>
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            Website :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.website}
                          </h5>
                        </div>
                      </div>
                      <hr
                        style={{
                          marginTop: "10px",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                      ></hr>
                      <h5 className="mt-4 glasstext">Company</h5>
                      <div className="mt-4">
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            Name :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.company?.name}
                          </h5>
                        </div>
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">
                            catchphrase :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.company?.catchPhrase}
                          </h5>
                        </div>
                        <div className="row align-items-center text-right mb-2">
                          <h5 className="detailLabel col-5 glasstext">bs :</h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.company?.bs}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-2">
                    <div className="address">
                      <h5 style={{ marginLeft: "10px" }} className="glasstext">
                        Address:{" "}
                      </h5>
                      <div className="mt-4">
                        <div className="row text-right mb-2">
                          <h5 className="detailLabel col-3 glasstext">
                            Street :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.address?.street}
                          </h5>
                        </div>
                        <div className="row text-right mb-2">
                          <h5 className="detailLabel col-3 glasstext">
                            Suite :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.address?.suite}
                          </h5>
                        </div>
                        <div className="row text-right mb-2">
                          <h5 className="detailLabel col-3 glasstext">
                            City :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.address?.city}
                          </h5>
                        </div>
                        <div className="row text-right mb-2">
                          <h5 className="detailLabel col-3 glasstext">
                            ZipCode :
                          </h5>
                          <h5 style={{ textAlign: "left" }} className="col-7">
                            {profileData?.address?.zipcode}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mapContainer"
                      style={{ height: "400px", width: "400px" }}
                    >
                      <MyMap
                        lat={profileData?.address?.geo.lat}
                        lng={profileData?.address?.geo.lng}
                      />
                    </div>
                    <div className="legend">
                      <div className="row">
                        <p className="glasstext col-auto offset-6">Lat: </p>
                        <p className="col-auto">
                          {profileData?.address?.geo.lat}
                        </p>
                        <p className="glasstext col-auto">Long: </p>
                        <p className="col-auto">
                          {profileData?.address?.geo.lng}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ height: "80%" }}
                  className="w-100 d-flex align-items-center justify-content-center"
                >
                  <p className="watermark">Comming Soon</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {
        showPopup && (
      <div className="logout-popup">
        <div className="cust-card just-center">
          <img className="mt-4" src={profileData?.profilepicture} />
          <h5>{profileData?.name}</h5>
          <h6 className="glasstext">{profileData?.email}</h6>
          <hr className="ml-2 mr-2" />
          <div className="mb-4 cp">
            {nextArr.map((x) => {
              return (
                <li
                  onClick={() => openProfile(x)}
                  className="row align-items-center"
                >
                  <div className="col-1">
                    <img
                      className="imgRnd"
                      style={{ height: "30px", width: "30px" }}
                      src={x.profilepicture}
                    />
                  </div>
                  <h6 className="col-8 offset-1 pt-2">{x.name}</h6>
                </li>
              );
            })}
          </div>
          <button className="btn btn-danger logoutbtn" onClick={()=>logout()}>Sign Out</button>
        </div>
      </div>
            
        )
      }
    </>
  );
};

export default ProfilePage;
