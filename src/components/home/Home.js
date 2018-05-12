import React, {Component} from 'react';
import SearchTravel from './SearchTravel';
import ShowTravelInformation from './ShowTravelInformation';
import Contact from './Contact';
import { Paper,Tabs,Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Company from '../navigation/Company.js';
import Footer from '../footer/Footer';

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
            <div className="home">
                <SearchTravel/>
           </div>
        );
    }
}
export default Home;