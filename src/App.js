import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/navigation/Navigation';
import BusSeats from './components/busseats/BusSeats';
import Home from './components/home/Home';
import  SignUpAndIn from './components/userAction/SignUpAndIn';
import Promo from './promo/Promo';
import Account from './components/account/Account';
import Contact from './components/contact/Contact';
import PasswordChangeForm from './components/passwordAction/PasswordChange';
import PasswordForgetPage from './components/passwordForget/PasswordForget';
import PasswordChange from './components/passwordChange/PasswordChange';
import MapWrapper from './components/contact/MapWrapper';
//import Square from './components/busseats/Square';
//import GeneralConditions from './components/condition/GeneralConditions';
import  './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { firebase } from './firebase';
import Footer from './components/footer/Footer';
import PasswordForget from './components/passwordForget/PasswordForget';
//import Users from './components/users';

//import withAuthentication from './components/session/withAuthentication';

const routes = [
  {
      path:'/',
      exact:true,
      right:() => <Promo/>,
      left: () => <Home/>  
  },
  {
      path:'/userAction',
      exact:true,
      right:() => <Promo/>,
      left: () => <SignUpAndIn/>
  },
  {
    path:'/password',
    exact:true,
    right:() => <PasswordChangeForm/>,

},
{
    path:'/passwordChange',
    exact:true,
    right:() => <PasswordChangeForm/>,

},
{
    path:'/passwordForget',
    exact:true,
    right:() => <PasswordForget/>,

},
  {
    path:'/contact',
    exact:true, 
    right:() => <Promo/>,
    left: () => <Contact/>
},
  {
    path:'/busseats',
    exact:true,
    right:() => <Promo/>,
    left: () => <BusSeats/>,
},

{
    path:'/account',
    exact:true,
    left:() => <Account/>,
    right:() => <PasswordChangeForm/>,
}
]
class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          authUser: null,
        };
      }
      componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState(() => ({ authUser }))
            : this.setState(() => ({ authUser: null }));
        });
      }
    
  render() {
    return (
    <MuiThemeProvider>
        <div>
      <Router>
          <div className="container" id="contain" >
              <div className="row">
                  <div className="col-md-12">
                  <Navigation authUser={this.state.authUser} />
                      {routes.map((route, i) =>
                          <Route
                              key={i}
                              path={route.path}
                          />
                      )}
                  </div>
              </div> <br/><br/><br/>
              <div className="row main-row">
                  <div className="col-md-7">
                      {routes.map((route, i) =>
                         <Route
                              key={i}
                              path={route.path}
                              exact={route.exact}
                              component={route.left}
                          />
                      )}
                  </div>
                  <div className="col-md-5">
                      {routes.map((route, i) =>
                          <Route
                              key={i}
                              path={route.path}
                              exact={route.exact}
                              component={route.right}
                          />
                      )}
                  </div>
                </div>
            </div>
        </Router>
        <Footer/>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default (App);
