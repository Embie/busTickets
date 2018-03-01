import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  NavBar from './components/header/NavBar';
import BusSeats from './components/busseats/BusSeats';
import Home from './components/home/Home';
import  SignUpAndRegistration from './components/login/SignUpAndRegistration';
import Select from 'react-select';
import  './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Paper } from 'material-ui';


const routes = [
  {
      path:'/header',
      exact:true,
      header: () => <NavBar/>,
  },
  {
      path:'/',
      exact:true,
      left: () => <Home/>,

     
  },
  {
      path:'/login',
      exact:true,
      left: () => <SignUpAndRegistration/>,
    
      
  },
  {
    path:'/busseats',
    exact:true,
    header:() =><NavBar/>,
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
              </div>
             <div className="row align-items-center justify-content-center">
             </div><br />
              <div className="row align-items-center justify-content-center">
                  <div className="col-md-10">
                      {routes.map((route, i) =>
                         <Route
                              key={i}
                              path={route.path}
                              exact={route.exact}
                              component={route.left}
                          />
                      )}
                  </div>
                  <div className="col-md-6">
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
