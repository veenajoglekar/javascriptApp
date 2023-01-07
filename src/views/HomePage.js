import React, { Component, useEffect, useState } from 'react'
import profileService from '../services/profile.service';
import '../App.css'


const HomePage = ({ profiles, parentCallback}) =>  {

    const [ profileArr, setProfileArr ] = useState([]);
    const [ nextArr, setNextArr ] = useState([]);
  
    
    useEffect( () => {
      setProfileArr(profiles)
    }, [profiles])
    

    const profileSelected = (profile) => {
        
        parentCallback(profile);

    }
  
    return (
      <div className="App">
        <div className="card" style={{ overflowY: 'auto', overflowX: 'hidden'}}>
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mt-4 textcss">Select an Account</p>
            </div>
            <div className="user-list">
              <ul style={{backgroundColor : 'white'}}>
                {
                  profileArr.map(
                    (item, index) => {
                      return (
                      <li onClick={ () => profileSelected(item)} className="row align-items-center mb-3 p-1" >
                        <div className="col-1">
                          <img className="imgRnd" style={{height: "30px", width: "30px"}} src={item.profilepicture} />
                        </div>
                        <h6 className="col-8 pt-2">{item.name}</h6>
                      </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="upperShade">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="Gradient1"  x1="0" x2="0" y1="0" y2="1">
                <stop class="stop1" style={{stopColor : '#355DC8'}} offset="0%" />
                <stop class="stop2" style={{stopColor : '#6635C8'}} offset="50%" />
                <stop class="stop3" style={{stopColor : '#702CC8'}} offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#Gradient1)"
              fillOpacity="1"
              d="M0,160L60,181.3C120,203,240,245,360,256C480,267,600,245,720,202.7C840,160,960,96,1080,106.7C1200,117,1320,203,1380,245.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }


export default HomePage;