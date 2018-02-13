import React, {Component} from 'react';
import SelectBoxOne from './SelectBoxOne';
import SelectBoxTwo from './SelectBoxTwo';
import DatePicker from './DatePicker';
import { Paper } from 'material-ui';

class Search  extends Component {
    render() {
      return (
      <Paper>
          <br/>
            <div className="container search">
              <div className="row">
                <form className="col-sm-6 col-sm-push-4">
                  <SelectBoxOne/>
                  <SelectBoxTwo/>
                <DatePicker/>
                  <button class="btn btn-info float-rigth btn-block"> Find trip </button>
                </form>
          </div><br/>
      </div>
   </Paper>
      )
    }
  }
  export default Search;