
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleChange = (event) => {
        
        setNewCurrency(event.target.value);
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }
    
    return (
<div className='alert alert-secondary'>
    <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
    </div>
    <select className="custom-select" id="inputGroupSelect01" onChange={handleChange} value={currency}>
        <option defaultValue value='£' name="pound" >£ Pound</option>
        <option value='$' name="dollar" >$ Dollar</option>
        <option value='€' name="euro" >€ Euro</option>
        <option value="₹" name="ruppee" >₹ Ruppee</option>
    </select>
</div>
    );
};
export default Currency;