import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit',
};

export function TemparatureInput({ scale, temperature, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in C{scaleNames[scale]} :</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}

export default TemparatureInput;
