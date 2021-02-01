import React, {Component} from 'react';
import "./AnalogClock2.css";
import $ from 'jquery';

// npm install sass-loader sass webpack


class AnalogClock2 extends Component {
    render() {
        return (
            <div id="clock">
                <b> </b>
                <span> </span>
                <span> </span>
                <i style={{transform: 'rotate(' + this.props.hoursAngle  +  'deg)'}}  > </i>
                <i style={{transform: 'rotate(' + this.props.minutesAngle  +  'deg)'}}  > </i>
                <i style={{transform: 'rotate(' + this.props.secondsAngle  +  'deg)'}}  > </i>
            </div>
        )
    }
}

export default AnalogClock2;


