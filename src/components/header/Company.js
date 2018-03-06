import React from 'react';
import Logo from '../../assets/img/city.png'
import { Link } from 'react-router-dom';
const options = ["Пловдив", "София", "Бургас", "Варна"]

class Company extends React.Component {
    render() {
      return (
        <div>
          <div className="btn-log">
         
                <a className="navbar-brand" href="#">
                    <img src={Logo} className="d-inline-block align-top logo" alt="logo" id="logo"/>
                </a>
             <Link className="btn btn-info btn-log" to="/">HOME</Link>
             <Link className="btn btn-info btn-log" to="/login">LOGIN</Link>
          </div> <br/> <br/> 
        
        </div>
      )
    }
  }
  export default Company;