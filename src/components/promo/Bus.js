import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import busImage from './bus.png' 

class Bus extends Component {

  render() {
    return (
      <Paper className="Bus">
        <img src={busImage} alt={"bus"}/>
      </Paper>
    );
  }
}

export default Bus;