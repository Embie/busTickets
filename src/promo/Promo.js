import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import promoImage from './p.jpg' // relative path to image

class Promo extends Component {

  render() {
    return (
      <div className="Promo">
        <img className="bus-img"src={promoImage} alt={"promo"} />
      </div>
    );
  }
}

export default Promo;