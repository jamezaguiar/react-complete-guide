import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = ({ expenses, onSelectYearToFilter }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter onSelect={onSelectYearToFilter} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
