import React, { Component } from "react";
import "./booking.css";
class Booking extends Component {
    state = {
        userName: ""
    }
    onChange = e => {
        console.log(e.target.value);
        this.setState({userName: e.target.value});
    }
    
    render() {
        const {userName} = this.state;
        return (
            <div>
                <h2>Enter your email: {userName}</h2> 
                <form>
                    <input type="text"
                           value={userName}
                           onChange={this.onChange}/>
                </form>               
            </div>
        );
    }
}
export default Booking;