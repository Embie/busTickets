import React, { Component } from 'react';
import { Tabs,Tab } from 'material-ui/Tabs';
import SignUp from './SignUp';
import Registration from './Registration';
import Paper from 'material-ui/Paper';
import Company from '../header/Company.js';
class SignUpAndRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
      }
    
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };
    
      render() {
        return ( 
        <div>
            <Paper zDepth={2}> 
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
              >
                <Tab label="Login" value="a">
                    <SignUp/>
                </Tab>
                <Tab label="Registration" value="b">
                    <Registration/>
                </Tab>
              </Tabs>
            </Paper>
        </div>
    );
  }
}

export default SignUpAndRegistration;
