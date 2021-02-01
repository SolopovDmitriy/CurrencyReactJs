import React, {Component} from  'react';
import DigitalClock from "./DigitalClock";
import './Clock.css';
import AnalogClock2 from "./AnalogClock2";
import AnalogClock from "./AnalogClock";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { //первичная инициализация state  - так можно тольков конструкторе
            currentTime:"--:--:--",
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        this.startTick(); //запускаем таймер
    }
    startTick() {
        setInterval(()=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString(),
                hoursAngle:new Date().getHours() * 30 + (Math.floor(new Date().getMinutes() / 12) * 6),
                secondsAngle:new Date().getSeconds() * 6,
                minutesAngle:new Date().getMinutes() * 6
            });
        }, 1000);
    }
    /*render() {
        return (
            <div className='clock-container'>
                <h1 className='clock-header'>{this.props.title}</h1>
                <p className='clock-timer'>{this.state.currentTime}</p>
            </div>);
    }*/
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <DigitalClock title={'clock1'} time={this.state.currentTime}/>
                <br/>
                <AnalogClock time={this.state.currentTime}/>
                <br/>
                <AnalogClock2 hoursAngle={this.state.hoursAngle} minutesAngle={this.state.minutesAngle} secondsAngle={this.state.secondsAngle}  />
            </div>

        );
    }
}

export  default Clock;