import React, { Component } from 'react';
import { Tabs,Tab } from 'material-ui/Tabs';
import SignUp from './SignUp';
import Registration from './Registration';
import Paper from 'material-ui/Paper';


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
        <Paper zDepth={2}> 
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Login" value="b">
                <SignUp/>
            </Tab>
            <Tab label="Registration" value="a">
                <Registration/>
            </Tab>
          </Tabs>
        </Paper>
    );
  }
}

export default SignUpAndRegistration;
