import React, {Component} from 'react';

class LineItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                    {this.props.day}
                    </div>
                    <div className="col-md-6">
                    {this.props.time}
                    </div>
                    <div className="col-md-6">
                    {this.props.route}
                    </div>
                    <div className="col-md-6">
                    {this.props.price}
                    </div>
                </div>
            </li>
        );
    }
}
export default LineItem;