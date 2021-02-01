import React, {Component} from 'react';
import Button from "../Button/Button";
import ConverterButton from "../ConverterButton/ConverterButton";

class CurrencyConverter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],

        };
    }

    componentDidMount() {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        my_error : "Ошибка при загрузке"
                    });
                }
            )
    }

    render() {
        const { my_error, isLoaded, items } = this.state;
        if (my_error) {
            return <div> Не получилось скачать курсы: {my_error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div className="currency-converter">
                        <select
                            id={this.props.selectId}
                            onChange={this.props.changeHandler.bind(this)}
                        >
                            {items.map(item => <option key={item.r030} value={item.rate}> {item.txt} </option>)}
                        </select>
                </div>
            );
        }
    }
}

export default CurrencyConverter2;