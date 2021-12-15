import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="new-expense">
      {isFormOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={handleCloseForm}
        />
      ) : (
        <button type="button" onClick={handleOpenForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
