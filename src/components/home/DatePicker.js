import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

class Search  extends Component {
    render() {
      return (
        <div className="form-group">
            <label htmlFor="select1" >Дата</label><br/>
            <input id="date" type="date" value="2017-06-01" className="form-group" />
        <br/>
      </div>
      )
    }
  }
  export default Search;