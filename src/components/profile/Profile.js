import React, { Component } from 'react';
import Personal from '../../assets/img/default.jpeg';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="card">
            <h4>Your Profile</h4>
            <div className="person-img-info">
            <img  className ="person-img" src={Personal} alt="bus"/>
            </div>
            <br/>
            <div className="person-info">
                <p><strong>Name:</strong><span> Gergana Georgieva</span></p>
                <p><strong>Email:</strong><span> geri@gmail.com</span></p>
                <p><strong>Phone:</strong><span> 088207384</span></p>
            </div>
         </div>
      </div>
    );
  }
}

export default Profile;
