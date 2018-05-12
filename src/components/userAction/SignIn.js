import React, { Component } from 'react';
import { SignUpLink } from './SignUp';
import { auth, db } from '../../firebase';
import * as Routes from '../constants/Routes';
import { PasswordForgetLink } from '../passwordAction/PasswordForget';
import PasswordChangeForm, { PasswordChangeLink } from '../passwordAction/PasswordChange';
import {
  Link,
  withRouter,
} from 'react-router-dom';
const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    <PasswordForgetLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(Routes.BUSSEATS);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault()
  }
  render () {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
    return ( 
      <form className="container users-form"  onSubmit={this.onSubmit}><br/>
        <h2 className="text-center">Login</h2>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              className="form-control" 
              name="email"
              placeholder="Email"
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password"
              placeholder="Password"
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}  />
          </div>
        </div><br/>
        <div className="row">
          <div className="col-md-11">
            <button disabled={isInvalid} type="submit" className="btn btn-block users-button ">
              Sign In
            </button>
          </div>
        </div><br />
      
         { error && <p>{error.message}</p> }
        
         <Link to={Routes.PASSWORD_CHANGE}>Sign Up</Link>
      </form>
    );
  }
}
export default withRouter(SignInPage);
export {
  SignInForm,
};