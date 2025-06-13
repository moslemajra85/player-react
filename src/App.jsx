import { useState } from 'react';
import ExpenseForm from './ExpenseTracker/ExpenseForm';
import ExpenseTable from './ExpenseTracker/ExpenseTable';
import Test from './components/Test';
const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default App;
