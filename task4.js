// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    console.log('Entered Title:', enteredTitle);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
    console.log('Entered Amount:', enteredAmount);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
    console.log('Entered Date:', enteredDate);
  };

  return (
    <div>
      <label>
        Expense Title:
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Expense Amount:
        <input type="text" value={enteredAmount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        Expense Date:
        <input type="date" value={enteredDate} onChange={handleDateChange} />
      </label>
      <br />
      <button>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
