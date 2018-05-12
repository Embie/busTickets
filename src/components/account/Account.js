import React, { Component } from 'react';
import Personal from '../../assets/img/default.jpeg';
import { ACCOUNT } from '../constants/Routes';
import {db}  from '../../firebase/index';
import { auth } from '../../firebase';
import PasswordForgetForm from '../passwordForget/PasswordForget';
import PasswordChangeForm from '../passwordChange/PasswordChange';
class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }
  render() {
    const { users } = this.state;
    return (
      <div className="account">
        <div className="card">
            <h4>Your Profile</h4>
            <div className="account-img-info">
            <img  className ="account-img" src={Personal} alt="bus"/>
            </div>
            <br/>
            <div className="account-info">
                <p><strong>Name:</strong><span> </span></p>
                <p><strong>Email:</strong><span> geri@gmail.com</span></p>
                <p><strong>Phone:</strong><span> 088207384</span></p>
            </div>
         </div>

         
         <PasswordForgetForm />
            <PasswordChangeForm />
         { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>
export default Account;
