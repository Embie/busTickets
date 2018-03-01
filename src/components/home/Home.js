import React, {Component} from 'react';
import SearchTravel from './SearchTravel';
import ShowTravelInformation from './ShowTravelInformation';
import Contact from './Contact';
import { Paper,Tabs,Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
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
                <Company/>
                <Paper zDepth={2}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >  
                        <Tab 
                            label="SEARCH" 
                            value="a" 
                            icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <SearchTravel/>
                        </Tab>
                        <Tab 
                            label="LINEES" 
                            value="b"  
                            icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <ShowTravelInformation/>
                        </Tab>
                        <Tab 
                            label="Contact" 
                            value="c"  
                            icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <Contact/>
                        </Tab>
                    </Tabs>
              </Paper>
              <Footer/>
        </div>
        );
    }
}
export default Home;