/*To achieve this, you can add a function to handle the submit event when the user clicks on the "Add Expense" button.
  This function will create an object based on the entered data and log it to the console. */

// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log('Expense Data:', expenseData);

    // You can perform further actions with the expenseData, like sending it to a server, etc.

    // Clear the form after submission
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;


