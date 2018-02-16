import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { FlatButton } from 'material-ui/FlatButton';
import DeleteButton from 'react-bootstrap-table/lib/toolbar/DeleteButton';
import {
  Link,

} from 'react-router-dom';

var products = [{
  id: 1,
  date: "12/01/2018",
  hour:"13:30",
  line:"Plovdiv-S0fia",
  price: 8, 
},
{
  id: 2,
  date: "12/01/2018",
  hour:"13:30",
  line:"Plovdiv-S0fia",
  price: 8, 
},
{
  id: 3,
  date: "12/01/2018",
  hour:"13:30",
  line:"Plovdiv-Sofia",
  price: 8, 
  
},
];
function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}

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
class ResultFromSearchForm extends Component {
  render() {
    return (
      <div class="container"> <br />
        <div class="row">
          <div class="col-md-12">
            <div className="ResultFromSearchForm">
              <BootstrapTable data={ products }
               insertRow={ true } 
               cellEdit={ cellEditProp }
                deleteRow={ true } 
                selectRow={ selectRowProp } 
                exportCSV={ true }
                options={ options }>
                  <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='date'>Дата</TableHeaderColumn>
                  <TableHeaderColumn dataField='hour'>Час</TableHeaderColumn>
                  <TableHeaderColumn dataField='line'>Линия</TableHeaderColumn>
                  <TableHeaderColumn dataField='price'>Цена</TableHeaderColumn>
                  <TableHeaderColumn dataField="Link"  editable={ false } dataFormat={BookTicket}></TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultFromSearchForm;