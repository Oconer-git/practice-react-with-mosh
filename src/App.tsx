
import { useState } from 'react';
import './App.css';
import ExpenseList from './Expense-tracker/components/ExpenseList';
import ExpenseFilter from './Expense-tracker/components/ExpenseFilter';
import ExpenseForm from './Expense-tracker/components/ExpenseForm';

export const categories = ['groceries', 'utilities', 'entertainment'];

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const[expenses, setExpenses] = useState<Expense[]>([
    {id:0, description:'milk', amount:12, category:'groceries'},
    {id:1, description:'electricity', amount:15.4, category:'utilities'},
    {id:2, description:'movie ticket', amount:12.40, category:'entertainment'},
    {id:3, description:'water', amount:53.12, category:'utilities'},
    {id:5, description:'rice sack', amount:10, category:'groceries'},
  ]);

  const visibleExpenses = selectedCategory 
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => (setSelectedCategory(category))} />
      </div>
      <ExpenseList
        expenses={visibleExpenses} 
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
      />
    </div>
  )
}

export default App;