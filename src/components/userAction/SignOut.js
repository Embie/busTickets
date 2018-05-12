import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    className="btn btn-light signOut"
  >
    Sign Out
  </button>

export default SignOutButton;
