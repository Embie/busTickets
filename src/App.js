import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import  CitiesField from './components/home/CitiesField';
import  NavBar from './components/header/NavBar';
import  ResultFromSearchForm from './components/home/ResultFromSearchForm';
import Registration from './components/login/Registration';
//import LineList from './components/home/LineList';
import SignUp from './components/login/SignUp';
import Profile from './components/profile/Profile';
import Search from './components/home/Search';
//import Promo from './components/promo/Promo';
import Select from 'react-select';
import  './App.css';
import  SignUpAndRegistration from './components/login/SignUpAndRegistration';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Paper } from 'material-ui';
import Bus from './components/promo/Bus';

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
      right: () => <Search/>
      
     
  },
  {
      path:'/login',
      exact:true,
      header:() =><NavBar/>,
      right: () => <SignUpAndRegistration/>,
      
  }
]
class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
        
      <Router>
          <div className="container">
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
              <div className="row">
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
              <div className="row">
                  <div className="col-md-6">
                      {routes.map((route, i) =>
                          <Route
                              key={i}
                              path={route.path}
                              exact={route.exact}
                              component={route.left}
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
