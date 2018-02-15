import React, {Component} from 'react';
import Search from './Search';
import ResultFromSearchForm from './ResultFromSearchForm';
import ContactInfo from './ContactInfo';
import { Paper,Tabs,Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

class CollectInformation extends Component {
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
            <div>
                <h2 className="page-info">Online Bus Ticket Booking </h2>
                <Paper zDepth={2}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Search your trip " value="b" icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <Search/>
                        </Tab>
                        <Tab label="Information for All Linees" value="a"  icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <ResultFromSearchForm/>
                        </Tab>
                        <Tab label="Book your ticket" value="c"  icon={<FontIcon className="muidocs-icon-action-home" ></FontIcon>}>
                            <ContactInfo/>
                        </Tab>
                    </Tabs>
              </Paper>
        </div>
        );
    }
}
export default CollectInformation;