import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Link
  } from 'react-router-dom';
  import FontIcon from 'material-ui/FontIcon';
  import {blue500} from 'material-ui/styles/colors';
  import AppBar from 'material-ui/AppBar';
  import Logo from '../../assets/img/logo.jpg'
  const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#888'
};
const iconStyles = {
    marginRight: 24,
  };
class Navbar extends Component {
  render() {
    return (
<div class="container">
    <nav class="navbar navbar-expand-sm bg-light navbar-light ">
        <a class="navbar-brand" href="#">
            <img src={Logo} className="d-inline-block align-top logo" alt="logo" id="logo"/>
        </a>
        <ul className="navbar-nav ">
            <li class="nav-item active ">
            {<RaisedButton
                label="Home"
                key="Home"
                style={styles.button}
                labelColor={styles.linkColor}
                containerElement={<Link className="HeaderLink" to="/"></Link>}
                icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
            />}
            </li>
            <li className="nav-item ">
                {<RaisedButton
                    label="busseats"
                    key="busseats"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/busseats">Reserve Seats</Link>}
                    icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
                />}
            </li>
            <li className="nav-item active">
                {<RaisedButton
                    label="Login"
                    key="Login"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/login">Login</Link>}
                    icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
                />}
            </li>
            
        </ul>
    </nav>
    <br />  
 </div>  
    );
  }
}

export default Navbar;
