import React from 'react';
const options = ["Пловдив", "София", "Бургас", "Варна"]

class SelectBoxOne extends React.Component {
    render() {
      return (
        <div className="form-group ">
          <label htmlFor="select1" >Oт</label>
          <select value={this.props.value} onChange={this.props.onChange} className="form-control" >
              {options.map(option => {
                return <option value={option} key={option} >{option}</option>
          })}
          </select>
        </div>
      )
    }
  }
  export default SelectBoxOne;
  
  