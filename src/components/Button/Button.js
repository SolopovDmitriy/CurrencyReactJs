import React, {Component} from 'react';

class Button extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            counter: 0
        }
    }
    clickHandler(event){
        this.setState({
            counter:this.state.counter + 1
        });
    }

    render() {
        return (
            <div className='button-container'>
                <input type="button" value={this.props.buttonValue} onClick={this.clickHandler.bind(this)}/>
                <input type='text' readOnly value={this.state.counter}/>
            </div>
        )
    }
}

export default Button;

