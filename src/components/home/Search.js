import React, {Component} from 'react';
import SelectBoxOne from './SelectBoxOne';
import SelectBoxTwo from './SelectBoxTwo';
import DatePicker from './DatePicker';
import Paper from 'material-ui/Paper/Paper';

class Search  extends Component {
    render() {
      return (
       <Paper>
            <form className="col-sm-12 col-sm-push-4">
              <SelectBoxOne/>
              <SelectBoxTwo/>
              <DatePicker/>
              <div>
              <button class="btn  btn-block btn-danger"> Search </button>
              </div>
              </form> <br/>
    </Paper>
      )
    }
  }
  export default Search;