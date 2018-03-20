import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/header/NavBar';
import BusSeats from './components/busseats/BusSeats';
import Home from './components/home/Home';
import  SignUpAndRegistration from './components/login/SignUpAndRegistration';
import Promo from './promo/Promo';
import Profile from './components/profile/Profile';
import  './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const routes = [
  {
      path:'/header',
      exact:true,
      header: () => <NavBar/>,
  },
  {
      path:'/',
      exact:true,
      header: () => <NavBar/>,
      right:() => <Promo/>,
      left: () => <Home/>
     
  },
  {
      path:'/login',
      exact:true,
      header: () => <NavBar/>,
      right:() => <Promo/>,
      left: () => <SignUpAndRegistration/>
  },
  {
    path:'/busseats',
    exact:true,
    header: () => <NavBar/>,
    right:() => <Profile/>,
    left: () => <BusSeats/>,
}
]
class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <Router>
          <div className="container" id="contain" >
              <div className="row">
                  <div className="col-md-12">
                      {routes.map((route, i) =>
                          <Route
                              key={i}
                              path={route.path}
                              exact={route.exact}
                              component={route.header}
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
    </MuiThemeProvider>
    );
  }
}
export default App;
