
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    //const [action, setAction] = useState('');
    const handleBudgetChange = (event) => {
        
        setNewBudget(event.target.value);
        if(newBudget>20000){
            alert("The value cannot exceed maximum fund £ 20000");
            setNewBudget(budget);
            return;
        }
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(newBudget<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending £" + totalExpenses);
            setNewBudget(budget);
            return;
        }
        
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;