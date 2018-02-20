import React, {Component} from 'react';
import busImage from '../../assets/img/bus_seats.png'
import Api from '../../Api'
const jsonData = require('./seatsData.json');

class BusSeats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeats: [],
            seatsData: [],
            selectedSeatsCount:0,
            options:[]
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
            elements.push(<div key={i} className="bus-row">{this.getSeats(this.state.seatsData[i], i)}</div>)
        }

        return elements

    }

    changeSeatState = (rowIndex, selectedSeat) => {
        const currentRow = this.state.seatsData[rowIndex]

        const matchedSeat = currentRow.find( (seat) => {
            return seat.seatNumber === selectedSeat.seatNumber
          });

          if(matchedSeat.status === 'selected'){
            matchedSeat.status = 'free'
            var remaining = this.state.selectedSeats.filter((seat)=>{
                return selectedSeat.seatNumber !== seat.seatNumber
            })
            
            this.setState({
                selectedSeats:remaining,
                selectedSeatsCount:remaining.length
            })
          }else{
            matchedSeat.status = 'selected'
            this.state.selectedSeats.push(matchedSeat)
            this.setState({
                selectedSeats:this.state.selectedSeats,
                selectedSeatsCount:this.state.selectedSeats.length
            })
          }

        this.setState({
            seatsData: this.state.seatsData
        })
    }
   
    getSeats = (row, rowIndex) => {
        const seatsOnRow = row.map((seat, i)=> {
            if(seat.status == "reserved"){
                return <div key={i} className="bus-seat bus-seat-reserved">{seat.seatNumber}</div>
            }
            if(seat.status == "selected"){
                return <div key={i} className="bus-seat bus-seat-selected" onClick={()=> this.changeSeatState(rowIndex, seat)}>{seat.seatNumber}</div>
            }
            return <div key={i} className="bus-seat" onClick={()=> this.changeSeatState(rowIndex, seat)}>{seat.seatNumber}</div>
        })
        return seatsOnRow
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };
    CalculatePrice = () => {
        let price=10;
        let total=this.state.selectedSeatsCount * price;
        return total;
    }
    render() {
        return (
            <div  className ="seats-main">
                <h2>Book Your Seat Now?</h2>
                <div className="seats-content">
                    <div className="seats-selector">
                        <h5>Избери места:</h5> 
                        <img src={busImage} alt="bus"/>
                        <div className="seats-container">
                            {this.createSeats()}
                        </div>
                    </div>
                </div>
                 <div className="booking-details">
						<h3> Selected Seats:<span id="counter">{this.state.selectedSeatsCount}</span></h3>
						<div>Total: <b>$<span id="total"> {this.CalculatePrice()}</span></b></div>
						<button className="checkout-button">Pay Now</button>
                        <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default BusSeats;
