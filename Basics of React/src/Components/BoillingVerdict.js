import React from 'react';

function BoillingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>Water would not boil.</p>;
}

export default BoillingVerdict;
