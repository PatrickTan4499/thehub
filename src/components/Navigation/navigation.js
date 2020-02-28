import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/signOut';

import { AuthUserContext } from './Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to="/signin">Sign In</Link>
    </li>
  </ul>
);

export default Navigation;