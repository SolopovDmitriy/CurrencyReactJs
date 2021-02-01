import React, {Component} from 'react';
import "./DigitalClock.css";

class DigitalClock extends Component {
    render() {
        return (
            <div className='clock-container clock_digital'>
                <p className='clock-timer'>{this.props.title}</p>
                <p className='clock-timer'>{this.props.time}</p>
            </div>
        );
    }
}

export  default DigitalClock;