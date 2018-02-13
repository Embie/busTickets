import React from 'react';
const options = ["Select an Option", "First Option", "Second Option", "Third Option"]
class SelectBoxOne extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { value: 'select'};
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
            <option value="select">Select an Option</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
        </div>
      )
    }
  }
  export default SelectBoxOne;
  
  