import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Routes from '../constants/Routes';
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form className="container" onSubmit={this.onSubmit}>
        <h4 className="">Change your password </h4><br/>
        <div className="row">
            <div className="col-md-8">
                <input className="form-control "
                  value={passwordOne}
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                  type="password"
                  placeholder="New Password"
                />
              </div>
            </div><br />
            <div className="row">
              <div className="col-md-8">
                  <input  className="form-control "
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </div>
            </div><br />
            <div className="row">
              <div className="col-md-8">
                <button disabled={isInvalid} type="submit" className="btn btn-block users-button ">
                  Reset My Password
                </button>
              </div><br />
          </div>
          { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm

const PasswordChangeLink = () =>
  <p>
    <Link to={Routes.PASSWORD_CHANGE}>Forgot Change</Link>
  </p>
  export {

    PasswordChangeLink
  };