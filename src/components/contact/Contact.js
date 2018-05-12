import React from 'react';
import Telephone from '../../assets/icons/phone.png'
import Facebook from '../../assets/icons/face.png'
import Skype from '../../assets/icons/skyp1.png'
import MapWrapper from './MapWrapper';
class Contact extends React.Component {
    render() {
        return (
            <div className="contactInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 in">
                            <h2>Contacts</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 contact-info">
                            <hr/>
                                <p>
                                    <img src={Telephone} className="contact-icon" alt="phone"/> <strong>0882091243</strong>
                                </p>
                                <p>
                                    <img src={Skype} className="contact-icon" alt="skype"/> <strong>example@abv.bg</strong>
                                </p>
                                <p>
                                    <img src={Facebook} className="contact-icon" alt="facebook"/>  <a href="http://delc.fmi.uni-plovdiv.net/" target="_blankpm install --save google-maps-react">Follow us</a>
                                </p>
                             <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <div className="">
                                <strong>Get in Touch</strong>
                            </div>
                            <div className="">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label htmlFor="fname">First Name</label>
                                        </div>
                                        <div className="col-md-7">
                                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col-md-7">
                                            <input type="text" id="email" name="email" placeholder="example@abv.bg"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                        <div className="col-md-7">
                                            <textarea  rows="5" cols="50" id="subject" name="subject" placeholder="Write something.."></textarea>
                                        </div>
                                    </div>
                                    <div  className="row">
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="submit" value="Submit"/>
                                        </div>
                                    </div>
                                </form>  
                              
                            </div>
                           <br />
                        </div>
                    </div>
                    <div>
                                    <MapWrapper/>
                                </div>
                </div><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
export default Contact;