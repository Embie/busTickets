import React, {Component} from 'react';
import SelectBoxOne from './SelectBoxOne';
import SelectBoxTwo from './SelectBoxTwo';
import DatePicker from 'material-ui/DatePicker';
import { Paper } from 'material-ui';
import ShowTravelInformation from './ShowTravelInformation';
import Link from 'react';
class SearchTravel extends Component {
    constructor(props){
      super(props)
      this.state={
        selectOne:'Пловдив',
        selectTwo:'',
        date: null,
        showReply: false
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showReply: !this.state.showReply})
    }
    onChangeOne = (e) => {
      this.setState({
        selectOne: e.target.value
      })
    }
    onChangeTwo = (e) => {
      this.setState({
        selectTwo: e.target.value
      })
    }
    onChangeDate = (event,date) => {
      this.setState({
       date: date,
      })
    }
   
    render() {
      return (
        <div>
          <div className="search">
            <h2>find your trip </h2>
              <div className="row">
                <form className="col-sm-12">
                  <SelectBoxOne 
                    value={this.state.selectOne} 
                    onChange={this.onChangeOne}
                    />
                  <SelectBoxTwo 
                    value={this.state.selectTwo}
                    onChange={this.onChangeTwo}/>
                  <DatePicker
                     hintText="Date"
                     id="date"
                     value={this.state.date}
                     onChange={this.onChangeDate}
                    className="form-group" />
                    <button className="btn btn-block" onClick={this.onClick.bind(this)} href='#'>Find</button>
                </form>               
             </div>
        </div><br/>

    
  
        <div className="col-md-12">
           {this.state.showReply &&  <ShowTravelInformation/>}
        </div>
      </div>
      )
    }
  }
  export default SearchTravel;