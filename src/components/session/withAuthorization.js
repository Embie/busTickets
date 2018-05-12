import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';
import * as Routes from '../../constants/Routes';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(Routes.SIGN_IN);
        }
      });
    }

    render() {
      return (
      <div>
          {authUser => authUser ? <Component /> : null}
   </div>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;