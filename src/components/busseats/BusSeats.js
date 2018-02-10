import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


class BusSeats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seatsCount: 40,
          seats:[{
            seatNumber:0,
            status:'free'
          }]
        };
      }
    
      createSeats = () => {
        console.log('test')
        let seatsElements = []
        for(let i =0; i < this.state.seatsCount; i++){
            seatsElements.push(<div key={i} className="bus-seat"></div>)
        }
        return seatsElements
      }
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };
    
      render() {
        return (
        <Paper zDepth={2}> 

          {this.createSeats()}
        </Paper>
    );
  }
}

export default BusSeats;
