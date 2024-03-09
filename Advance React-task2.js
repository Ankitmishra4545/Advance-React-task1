Below is an example code snippet for adding a button next to each expense, and clicking the button changes the expense to $100 using the same logic as changing the title:

import React, { useState } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Expense 1', amount: 50 },
    { id: 2, description: 'Expense 2', amount: 75 },
    // Add more expenses as needed
  ]);

  const handleExpenseClick = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === expenseId ? { ...expense, amount: 100 } : expense
      )
    );
  };

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>{`${expense.description}: $${expense.amount}`}</p>
          <button onClick={() => handleExpenseClick(expense.id)}>
            Change Amount to $100
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;


This example assumes you have an array of expenses with id, description, and amount. 
  The handleExpenseClick function updates the amount of the clicked expense to $100 using the setExpenses function.
