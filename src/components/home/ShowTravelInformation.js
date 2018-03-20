import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
  Link,

} from 'react-router-dom';

var products = [{
  id: 1,
  date: "12/01/2018",
  hour:"14:30",
  line:"Plovdiv-Sofia",
  price: 8, 
},
{
  id: 2,
  date: "12/01/2018",
  hour:"13:30",
  line:"Plovdiv-Sofia",
  price: 8, 
},
{
  id: 3,
  date: "12/01/2018",
  hour:"12:30",
  line:"Plovdiv-Sofia",
  price: 8, 
  
},
{
  id: 3,
  date: "12/01/2018",
  hour:"16:30",
  line:"Plovdiv-Sofia",
  price: 8, 
  
},
{
  id: 3,
  date: "12/01/2018",
  hour:"16:30",
  line:"Plovdiv-Sofia",
  price: 8, 
  
},
{
  id: 3,
  date: "12/01/2018",
  hour:"18:30",
  line:"Plovdiv-Sofia",
  price: 8, 
  
},
];
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
  return (<Link className="btn btn-info btn-md btn-block" to="/login">Book</Link>);
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
              <BootstrapTable data={ products }
              search={true}
              searchPlaceholder='Enter city'
               insertRow
               cellEdit={ cellEditProp }
                deleteRow={ true } 
                selectRow={ selectRowProp } 
                exportCSV={ true }
                clearSearch={true} 
                options={ options }
                responsive={true}
                width={window.innerWidth < 406 ? '0' : '5%'}
                striped
                 >
                  <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='date'>Дата</TableHeaderColumn>
                  <TableHeaderColumn dataField='hour'  searchable={ true }>Час</TableHeaderColumn>
                  <TableHeaderColumn dataField='line' searchable={ true }>Линия</TableHeaderColumn>
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