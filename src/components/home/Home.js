import React, {Component} from 'react';
import SearchTravel from './SearchTravel';
import ShowTravelInformation from './ShowTravelInformation';
import Contact from './Contact';
import { Paper,Tabs,Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Company from '../header/Company.js';
import Footer from '../header/Footer.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }
    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };
    render() {
        return (
            <div className=""> 
               
                
                 <SearchTravel/>
                     
              
              <Footer/>
        </div>
        );
    }
}
export default Home;