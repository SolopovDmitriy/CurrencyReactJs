import React, {Component} from 'react';

class CountdownBoard extends Component {
    render() {
        return (
               <h5> Обратный отсчет: {this.props.timeLeft} </h5>
        )
    }
}

export default CountdownBoard;