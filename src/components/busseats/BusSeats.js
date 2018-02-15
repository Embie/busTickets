import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import busImage from '../../assets/img/bus_seats.png'
import Api from '../../Api'
const jsonData = require('./seatsData.json');

class BusSeats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSeats: [],
            seatsData: []
        };
    }

    componentDidMount = () => {
        this.splitToRows(jsonData.seatsData)
    }

    splitToRows = (seats) => {

        const seatsPerRow = 4;
        const rows = Math.ceil(seats.length / seatsPerRow);

        const dataLength = rows.length;
        let seatsData = [];
        for (let k = 0; k < rows; k++) {

            let data = seats.slice(k * seatsPerRow, (1 + k) * seatsPerRow);
            seatsData.push(data)
        }
        this.setState({
            seatsData
        });

        console.log(seatsData)
    }

    createSeats = () => {

        let elements = [];
        for (let i = 0; i < this.state.seatsData.length; i++){
            elements.push(<div key={i} className="bus-row">{this.getSeats(this.state.seatsData[i])}</div>)
        }

        return elements

    }

    getSeats = (row) => {
        const seatsOnRow = row.map((seat, i)=> {
            return <div key={i} className="bus-seat">{seat.seatNumber}</div>
        })
        return seatsOnRow
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Paper zDepth={2}>
                <div>Избери места:</div>
                <div className="seats-selector">
                    <img src={busImage} alt="bus"/>
                    <div className="seats-container">
                        {this.createSeats()}
                    </div>
                </div>
            </Paper>
        );
    }
}

export default BusSeats;
