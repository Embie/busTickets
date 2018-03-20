import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/city.png'
  const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#888'
};
class Navbar extends Component {
  render() {
    return (
        <div className>
        <div>
        </div>
        
        <nav className="navbar navbar-dark  navbar-expand-md  " >
            <a href="/" className="navbar-brand "><img src={Logo} className="d-inline-block align-top logo" alt="logo" id="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
     
        </div>  
    );
  }


  
}

export default Navbar;
