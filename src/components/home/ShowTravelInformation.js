import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
  Link,

} from 'react-router-dom';

let results = [{
  id: 1,
  company: "Витоша Експрес",
  days:[0,1,2,3,4,5],
  from:"Пловдив",
  to:"София",
  departure: "18:30",
  arrival: "20:30",
}];

const options = {
  exportCSVText: 'Export',
  insertText: 'Add',
  deleteText: 'Delete',
  saveText: 'Save',
  closeText: 'Close'
  
 
}
// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

const cellEditProp = {
  mode: 'click'
};

function BookTicket(){
  return (<Link className="btn btn-info btn-md btn-block" to="/userAction">Book</Link>);
}
class ShowTravelInformation extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <hr/>
                  <h5>Result from Search</h5>
                <hr/>
            </div>
        </div><br/>
        <div className="row">
          <div className="col-md-12">
            <div className="ShowTravelInformation">
              <BootstrapTable data={ this.props.results }
              search={true}
              searchPlaceholder='Enter city'
               insertRow
               cellEdit={ cellEditProp }
                deleteRow={ true } 
                exportCSV={ true }
                clearSearch={true} 
                options={ options }
                responsive={true}
                striped
                 >
                  <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='from'>От</TableHeaderColumn>
                  <TableHeaderColumn dataField='to'>До</TableHeaderColumn>
                  <TableHeaderColumn dataField='departure'>Тръгва</TableHeaderColumn>
                  <TableHeaderColumn dataField='arrival'>Пристига</TableHeaderColumn>
                  <TableHeaderColumn dataField='company' searchable={ true }>Компания</TableHeaderColumn>
                  <TableHeaderColumn dataField='price'>Цена</TableHeaderColumn>
                  <TableHeaderColumn dataField='Link' insertRow={ false }   dataFormat={BookTicket}></TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTravelInformation;