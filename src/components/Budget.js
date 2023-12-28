import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxBudget = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if(event.target.value > maxBudget) {
            alert("The budget cannot exceed  £ 20 000");
            setNewBudget(maxBudget);
            return;
        } else if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses);
            return;
        }

        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
