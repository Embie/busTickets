import React, {Component} from 'react';
import SelectBoxOne from './SelectBoxOne';
import SelectBoxTwo from './SelectBoxTwo';
import DatePicker from './DatePicker';
import { Paper } from 'material-ui';

class Search  extends Component {
    render() {
      return (
      <Paper>
            <div className="Search">
              <div className="row">
                <form className="col-sm-4 col-sm-push-4">
                  <SelectBoxOne/>
                  <SelectBoxTwo/>
                <DatePicker/>
                  <button class="btn btn-lg btn-success"> Search </button>
                </form>
          </div>
      </div>
   </Paper>
      )
    }
  }
  export default Search;