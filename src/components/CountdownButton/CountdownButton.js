import React, {Component} from 'react';

class  CountdownButton extends Component{
    startTimer(event) {
        return this.props.startTimer(this.props.time)
    }
    render() {
        return (
            <button
                type="button"
                onClick={()=>{this.props.startTimer(this.props.time)}}
            >
                {this.props.textButton}
            </button>
        )
    }
}

export default CountdownButton;
