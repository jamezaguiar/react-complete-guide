import { useMemo, useState } from 'react';
import { hasText } from './utils/stringUtils';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [filterYear, setFilterYear] = useState('');
  const [allExpenses, setAllExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const expenses = useMemo(() => {
    if (!hasText(filterYear)) return allExpenses;

    return allExpenses.filter(
      expense => expense.date.getFullYear().toString() === filterYear
    );
  }, [allExpenses, filterYear]);

  const handleSelectYearToFilter = event => setFilterYear(event.target.value);

  const addExpenseHandler = newExpense =>
    setAllExpenses(prevExpenses => [...prevExpenses, newExpense]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expenses}
        onSelectYearToFilter={handleSelectYearToFilter}
      />
    </div>
  );
};

export default App;
