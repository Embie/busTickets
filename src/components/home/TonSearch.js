import React from 'react';

import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import DatePicker from 'material-ui/DatePicker';
import { Paper } from 'material-ui/Paper';
import { Toolbar } from 'material-ui/Toolbar';

class ResultFromSearchForm extends React.Component {
	constructor (props) {
	  super(props)
	  this.state = {}
	}
	updateValue(value) {
		this.setState({
			selectValue: this.value
		});
	  }
	render () {
	  const options = [
		{ label: "Пловдив", value: 1 },
		{ label: "София", value: 2 },
		{ label: "Хасково", value: 3 }
		// And so on...
	  ]
  
	  return (
	
		<form class="container">
			<div  class="row">
				<div class="col-md-6 border-2">
					<h2>Избери направлениe</h2>
					<label>Тръгва</label>
					<VirtualizedSelect
					options={options}
					onChange={(selectValue) => this.setState({ selectValue })}
					value={this.state.selectValue}
					searchable
					/>
				</div>
			</div>
			<div  class="row">
				<div class="col-md-6">
					<label class="">Пристига</label>
					<VirtualizedSelect
					options={options}
					onChange={(selectValue) => this.setState({ selectValue })}
					value={this.state.selectValue}
					searchable
					/>
				</div>
			</div>
			<div  class="row">
				<div class="col-md-6">
					<label class="">Пристига</label>
					<DatePicker hintText="Portrait Dialog" />
				</div>
			</div>
			<br/>
			<div class="row">
				<div class="col-md-6">
					<button type="button" class="btn btn-primary float-right" >Search</button>
				</div>
			</div>
		
			<br/>
		</form>
	  )
	}
  }
  export default ResultFromSearchForm;