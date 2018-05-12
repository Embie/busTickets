import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/Routes';



class Footer extends React.Component {
    render(){
        return(
             
                      <div className="container" id="footer" className="footer" >
                          <div className="row">
                           
                              <div className="col-md-3">
                                 <h5>За Нас</h5>
                                 <p>Политика на лични данни</p>
                              </div>
                              
                              <div className="col-md-3">
                                  <h5>Информация</h5>
                                  <p> Автобусни спирки</p>
                                  <p> Често задавани</p>
                              </div>
                              <div className="col-md-3">
                                <h5>Контакти</h5>
                                <p> Тел.: 02/ 831 33 77</p>
                                <p> GSM: 0884 65 44 48 </p>
                                <p>E-mail: lakata@abv.bg</p>
                              </div>
                              <div className="col-md-3">
                                <h5>Платежни оператори</h5>   
                                <p> Easy Pay</p>
                                <p>PayPal</p>
                                <p>Visa</p>
                              </div>
                          </div> <hr/><br/>
                          <div className="row">
                              <div className="col-md-12 text-center">
                              2018 Bus Ticket Reservation Widget. All Rights Reserved | Design by Me
                          </div>
                          </div>
                        </div>
        );
    }
}
      
export default Footer;