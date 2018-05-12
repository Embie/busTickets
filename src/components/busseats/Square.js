import React from 'react';
import LogoImg from '../../assets/img/city.png'
import { Link } from 'react-router-dom';
class Logo extends React.Component {
    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="info-free">
                </div>
                <div className="col-md-6">Free
                </div>
            </div><br/>
            <div className="row">
                <div className="info-reserved">
                </div>
                <div className="col-md-6">Reserved
                </div>
            </div><br/>
            <div className="row">
                <div className="info-selected">
                </div>
                <div className="col-md-6">Selected
                </div>
            </div>
        </div>
      )
    }
  }
  export default Logo;