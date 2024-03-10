/* To dynamically display expenses in the UI, you can modify the App.js file to manage a list of expenses in its state and pass this list as a prop to the Expense component  */

// App.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    // Update the expenses list with the new expense
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;

/*In this example:

The App component now has a state variable expenses, which is an array containing the list of expenses.

The addExpenseHandler function is used to update the expenses list with a new expense. It utilizes the functional form of setExpenses to correctly update the state based on the previous state.

The ExpenseForm component now receives the onAddExpense prop, which is the addExpenseHandler function. This allows the ExpenseForm to notify the App component when a new expense is submitted.

The Expense component receives the expenses array as a prop and can dynamically render the list of expenses in its UI.

Now, when you add an expense using the form, it should dynamically appear in the UI as it updates the expenses state in the App component, and this updated list is passed down to the Expense component.

*/




