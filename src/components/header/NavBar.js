import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.jpg'
  const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#888'
};
class Navbar extends Component {
  render() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <a className="navbar-brand" href="#">
                    <img src={Logo} className="d-inline-block align-top logo" alt="logo" id="logo"/>
                </a>
                <ul className="navbar-nav ">
                    <li className="nav-item active ">
                    {<RaisedButton
                        label="Home"
                        key="Home"
                        style={styles.button}
                        labelColor={styles.linkColor}
                        containerElement={<Link className="HeaderLink" to="/"></Link>}
                    />}
                    </li>
                    <li className="nav-item ">
                        {<RaisedButton
                            label="busseats"
                            key="busseats"
                            style={styles.button}
                            labelColor={styles.linkColor}
                            containerElement={<Link className="HeaderLink" to="/busseats">Reserve Seats</Link>}
                        />}
                    </li>
                    <li className="nav-item active">
                        {<RaisedButton
                            label="Login"
                            key="Login"
                            style={styles.button}
                            labelColor={styles.linkColor}
                            containerElement={<Link className="HeaderLink" to="/login">Login</Link>}
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
