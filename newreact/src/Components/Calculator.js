import React, { Component } from 'react';
import { convert, toCelsius, toFarenheit } from '../lib/Converter';
import { TemparatureInput } from './TemperatureInput';
import BoillingVerdict from './BoillingVerdict';

export class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;
        return (
            <div>
                <TemparatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemparatureInput
                    scale="f"
                    temperature={farenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoillingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
