import React from 'react';
const options = ["Пловдив", "София", "Бургас", "Варна"]

class Company extends React.Component {
    render() {
      return (
        <div>
              <h1 className="company">Tr<span className="t">a</span>vel H<span className="t">u</span>n<span className="t">t</span></h1>
        </div>
      )
    }
  }
  export default Company;