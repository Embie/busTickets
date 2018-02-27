import React, {Component} from 'react';
import SelectBoxOne from './SelectBoxOne';
import SelectBoxTwo from './SelectBoxTwo';
import DatePicker from 'material-ui/DatePicker';
import { Paper } from 'material-ui';

class SearchTravel extends Component {
    constructor(props){
      super(props)
      this.state={
        selectOne:'Пловдив',
        selectTwo:'',
        date: null,
      }
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
      <Paper>
          <br/>
            <div className="container search">
              <div className="row">
                <form className="col-sm-6 col-sm-push-4">
                  <SelectBoxOne value={this.state.selectOne} onChange={this.onChangeOne}/>
                  <SelectBoxTwo value={this.state.selectTwo} onChange={this.onChangeTwo}/>
                  <DatePicker hintText="Date"
                    id="date"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    className="form-group" />
                  <button className="btn btn-info float-rigth btn-block"> Find trip </button>
                </form>
          </div><br/>
      </div>
   </Paper>
      )
    }
  }
  export default SearchTravel;