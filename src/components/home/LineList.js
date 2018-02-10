import React, { Component } from 'react';
import  LineItem from './components/home/LineItem.js';
import table from 'src/data/table';
import {Paper} from 'material-ui/Paper';
import router from 'material-ui/svg-icons/hardware/router';

class LineList extends Component {
  constructor(props){
    super(props)
    this.state = {
      day:'',
      time:'',
      line:'',
      price:'',
    }
  }

  componentDidMount () {
    this.loadData()
  }

  
  changeState = (json) => {
      console.log(json)  
      this.setState({
        day:json.day,
        time:json.time,
        route:json.router,
        price:json.price
      }) 
  }
  loadData = () => {
    table.get({
      url:'date/table.json',
      success: this.changeState
    })
  }
  getItems = (items) => {
    if(items.length > 0){
        const lineList = items.map((item, index)=>{
          return (<LineItem 
            key={index}
            day={item.day} 
            time={item.time} 
            route={item.route}
            price={item.price}           
          />)

        })
        return lineList
    }
    return <div>There are no results</div>
  }
  render() {
    return (
      <Paper className="LineList">
        <div className="list-header">
          <div className="list-title">{this.state.day}</div>
          <div className="list-description">{this.state.time}</div>
          <div className="list-description">{this.state.route}</div>
          <div className="list-description">{this.state.price}</div>
        </div>
        {this.getItems(this.state.items)}
      </Paper>
    );
  }
}

export default LineList;