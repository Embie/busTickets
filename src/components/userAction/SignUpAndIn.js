import React, { Component } from 'react';
import { Tabs,Tab } from 'material-ui/Tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Paper from 'material-ui/Paper';
import Logo from '../navigation/Logo';
class SignUpAndIn extends Component {
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
                <Tab label="Sign In" value="a">
                    <SignIn/>
                </Tab>
                <Tab label="Sign Up" value="b">
                    <SignUp/>
                </Tab>
              </Tabs>
            </Paper>
        </div>
    );
  }
}

export default SignUpAndIn;
