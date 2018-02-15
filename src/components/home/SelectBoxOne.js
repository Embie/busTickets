import React from 'react';
const options = ["Пловдив", "София", "Бургас", "Варна"]
class SelectBoxOne extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'Пловдив'};
    }
    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      return (
        <div className="form-group ">
          <label htmlFor="select1" >Oт</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control" >
          {options.map(option => {
            return <option value={option} key={option} >{option}</option>
          })}
          </select>
        </div>
      )
    }
  }
  export default SelectBoxOne;
  
  