import React from 'react';
import LogoImg from '../../assets/img/city.png'
import { Link } from 'react-router-dom';
class Company extends React.Component {
    render() {
      return (
        <div>
          <div className="btn-log">
             <a className="navbar-brand">
                <img src={LogoImg} className="d-inline-block align-top logo" alt="logo" id="logo"/>
              </a>
             <Link className="btn btn-info btn-log" to="/">HOME</Link>
             <Link className="btn btn-info btn-log" to="/login">LOGIN</Link>
          </div> <br/> <br/> 
        </div>
      )
    }
  }
  export default Company;