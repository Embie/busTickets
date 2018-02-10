import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import { Paper } from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import './cart.css';
const styles = {
  customWidth: {
    width: 150,
  },
};
class    ResultFromSearchForm extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
   
    return (
      
      <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="./components/promo/bus.png" alt="bus"/>
        </div>
        <div class="col-md-6">
           <Card>
             <CardHeader
                  title="Избери направление"
                  titleColor="lightblue"
                  actAsExpander={false}
                  showExpandableButton={false}

                />
              <CardActions>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                      >
                      <MenuItem value={1} primaryText="Пловдив" />
                      <MenuItem value={2} primaryText="София" />
                      <MenuItem value={3} primaryText="Бургас" />    
                    </SelectField>
                      <br />
                    <SelectField
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <MenuItem value={1} primaryText="Пловдив" />
                      <MenuItem value={2} primaryText="София" />
                      <MenuItem value={3} primaryText="Бургас" />
                    </SelectField>
                    <br/>
                      <label class="">Дата</label>
                      <DatePicker hintText="Избери дата" />
                    <br />
                    <RaisedButton
                      labelPosition="after"
                      primary={true}
                      icon={<ActionSearch />}
                      style={styles.button}
                  />
              </CardActions>`
              <br/>
          </Card>
        </div>
       
      </div>
    </div>
     
    );
  }
}
export default ResultFromSearchForm;