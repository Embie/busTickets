import React from 'react';
const options = ["София", "Пловдив", "Бургас", "Варна"]
class SelectBoxTwo extends React.Component {
    render() {
      return (
        <div className="form-group">
            <label htmlFor="select2" >До</label>
            <select 
              value={this.props.value} 
              onChange={this.props.onChange} 
              className="form-control">
              {options.map(option => {
                return <option value={option} key={option} >{option}</option>
              })}
           </select>
        </div>
      )
    }
  }
  export default SelectBoxTwo;
  