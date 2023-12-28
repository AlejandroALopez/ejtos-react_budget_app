import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [curr, setCurr] = useState(currency);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
        setCurr(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currency">Currency</label>
            <select className='form-select' style={{"backgroundColor": "lightgreen"}} id="currency" value={curr} name="currency" onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
