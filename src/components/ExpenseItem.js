import './ExpenseItem.css';

const ExpenseItem = () => {
  const expense = {
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 294.67,
  };

  return (
    <div className="expense-item">
      <div>{expense.date.toLocaleString('en-US')}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
