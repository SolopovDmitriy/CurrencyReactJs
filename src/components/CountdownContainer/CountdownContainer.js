import React, {Component} from 'react';
import CountdownButton from "../CountdownButton/CountdownButton";
import CountdownBoard from "../CountdownBoard/CountdownBoard";

class CountdownContainer extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            timeLeft: null, //сколько осталось секунд
            timer: null //ссылка на таймер
        }
        this.startTimer = this.startTimer.bind(this);
        console.dir(this);
    }

    startTimer(tLeft) {
        clearInterval(this.state.timer);
        var tim = setInterval(() => {
             tLeft = this.state.timeLeft - 1;
            this.setState({
                timeLeft:tLeft
            });
            if (this.state.timeLeft == 0) {
                clearInterval(tim)
            }
        }, 1000);
        return this.setState({timer:tim, timeLeft:tLeft})
    }

    render() {
        return (
            <div className='countdown-container'>
                <h5>Таймер обратного отсчета</h5>
                <CountdownButton textButton='биг бада бум' time='15' startTimer={this.startTimer}/>
                <CountdownBoard timeLeft={this.state.timeLeft}/>
            </div>
        )
    }
}

export default CountdownContainer;