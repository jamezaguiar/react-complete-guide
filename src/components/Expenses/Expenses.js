import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ expenses, onSelectYearToFilter }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter onSelect={onSelectYearToFilter} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
