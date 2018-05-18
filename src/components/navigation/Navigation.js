import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import LogoImg from '../../assets/img/city.png';
import SignOutButton from '../userAction/SignOut';
import * as Routes from '../constants/Routes';
//import AuthUserContext from '../session/AuthUserContext';


const NavigationAuth = () =>
<ul className="nav navbar-nav ml-auto w-100 justify-content-end">
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.HOME}>HOME</Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.CONTACT}>CONTACT</Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.BUSSEATS}>BUSSEATS</Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.ACCOUNT}>ACCOUNT</Link>
    </li>
    <li className="nav-item active">
        <SignOutButton />
    </li>
</ul>


const NavigationNonAuth = () =>
<ul className="nav navbar-nav ml-auto justify-content-end">
<li className="nav-item active">
        <Link className="nav-link" to={Routes.HOME}>HOME</Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.CONTACT}>CONTACT</Link>
    </li>                 
    <li className="nav-item active">
        <Link className="nav-link" to={Routes.USERS}>LOGIN</Link>
    </li>
</ul>

const Navigation = ({ authUser }) =>  
    <nav className="navbar navbar-dark  navbar-expand-md  " >
        <a href="/" className="navbar-brand "><img src={LogoImg} className="d-inline-block align-top logo" alt="logo" id="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
             <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            { authUser
                ? <NavigationAuth />
                : <NavigationNonAuth />
            }
        </div>
    </nav> 
 
 

export default Navigation;
