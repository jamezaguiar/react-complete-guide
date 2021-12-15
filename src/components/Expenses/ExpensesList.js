import React from 'react';
import { hasLength } from '../../utils/arrayUtils';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  return hasLength(expenses) ? (
    <ul className="expenses-list">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  ) : (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
};

export default ExpensesList;
