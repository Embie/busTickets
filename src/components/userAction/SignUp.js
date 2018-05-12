import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as Routes from '../constants/Routes';


const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>
const INITIAL_STATE = {
      name:'',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      phone:'',
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor (props) {
    super(props);
      this.state = { ...INITIAL_STATE };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
      phone,
    } = this.state;
    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
       // Create a user in your own accessible Firebase Database too
       db.doCreateUser(authUser.uid, username, email,phone)
       .then(() => {
         this.setState(() => ({ ...INITIAL_STATE }));
         history.push(Routes.BUSSEATS);
       })
       .catch(error => {
         this.setState(byPropKey('error', error));
       });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  

  render () {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      phone,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === ''
    phone === '';

    return (
      <form className="container users-form" onSubmit={this.onSubmit}>
        <br/>
        <h2 className="text-center">Sign Up</h2>
        <br/>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="name">Name</label>
            <input type="text" required className="form-control" name="name"
              placeholder="Enter your name"
              value={username}
              onChange={event => this.setState(byPropKey('username', event.target.value))} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Enter your email"
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="passwordOne">Password</label>
            <input type="password" className="form-control" name="passwordOne"
              placeholder="Enter Password"
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="passwordTwo">Password</label>
            <input type="password" className="form-control" name="passwordTwo"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="name">Phone</label>
            <input type="text" required className="form-control" name="phone"
              placeholder="Enter your phone"
              value={phone}
              onChange={event => this.setState(byPropKey('phone', event.target.value))}  />
          </div>
        </div>
        <br />  
        <div className="row"> 
          <div  className="col-md-11">
            <button type="submit" className="btn users-button btn-block " disabled={isInvalid} >Registrate</button>
          </div>
        </div>
        { error && <p>{error.message}</p> }
        <br /><br />
      </form>
    )
  }
}
const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={Routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};