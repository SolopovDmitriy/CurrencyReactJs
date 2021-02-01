import React, {Component} from 'react';
import CurrencyConverter2 from "../CurrencyConverter2/CurrencyConverter2";

class ConverterButton extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            result: 0,
            currencyFrom: 1,
            currencyTo: 1
        }
        this.textInput = React.createRef();
    }
    clickHandler(event){ // обработчик события нажатия на кнопку
        console.log("валюта, деньги = " + this.textInput.current.value);
        console.log("курс к гривне в верхенем селекте = " + this.state.currencyFrom);
        console.log("курс к гривне в нижнем селекте = " + this.state.currencyTo);
        this.setState({
            //this.textInput.current.value - деньги, которые хотим конвертировать
            // this.state.currencyFrom - валюта наших денег
            //this.state.currencyTo - курс в какую валюту хотим конвертировать
            result: parseFloat(this.textInput.current.value) * parseFloat(this.state.currencyFrom) / parseFloat(this.state.currencyTo)
        });
    }

    changeInputFrom(event){ // обработчик события выбора верхнего селекта
        console.log("from = " + event.target.value);
        this.setState({
            currencyFrom: event.target.value
        });
    }

    changeInputTo(event){  //обработчик события выбора нижнего селекта
        console.log("to = " + event.target.value);
        this.setState({//метод сетстейт изменяет стейт переменную currencyTo
            currencyTo: event.target.value //event.target.value -  target - селект, target.value - значение селекта, в этом конкретном случае это rate - курс к гривне,
        });
    }




    render() {
        return (
            <div className='button-container'>
                <CurrencyConverter2 selectId="from" changeHandler={this.changeInputFrom.bind(this)} />
                <CurrencyConverter2 selectId="to"   changeHandler={this.changeInputTo.bind(this)}   />
                <input ref={this.textInput}  />
                <input type="button" value={this.props.buttonValue} onClick={this.clickHandler.bind(this)}/>
                <input type='text' readOnly value={this.state.result}/>
            </div>
        )
    }
}

export default ConverterButton;

