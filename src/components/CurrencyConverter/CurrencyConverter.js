import React, {Component} from 'react';

class CurrencyConverter extends Component {
    constructor(prop) {
        super(prop);
        this.rate_url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        this.state = {
            currentRate: null
        }
        this.uploadCurrentRate = this.uploadCurrentRate.bind(this);
    }

    componentDidMount() {
        this.uploadCurrentRate()
    }

    uploadCurrentRate() {
        console.log(this.rate_url)
        fetch(this.rate_url)
            .then(response => response.json())
            .then((result) => {
                console.log(result.length);
                console.dir(result);
                this.setState({
                    currentRate:result
                })
            });
    }

    render() {
        return(
            <div className="currency-converter-hello">
                {
                    this.state.currentRate.map((item) =>
                        <p>{item.txt} <span>{item.rate}</span></p>
                    )
                }
            </div>
        )
    }
}

export default CurrencyConverter;