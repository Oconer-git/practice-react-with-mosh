
import { useState } from 'react';
import './App.css';
import ExpenseList from './Expense-tracker/components/ExpenseList';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const[expenses, setExpenses] = useState<Expense[]>([
    {id:0, description:'milk', amount:12, category:'groceries'},
    {id:1, description:'electricity', amount:15.4, category:'utilities'},
    {id:2, description:'movie ticket', amount:12.40, category:'entertainment'},
    {id:3, description:'water', amount:53.12, category:'utilities'},
    {id:5, description:'rice sack', amount:10, category:'groceries'},
  ]);

  return (
    <div>
      <ExpenseList 
        expenses={expenses} 
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
      />
    </div>
  )
}

export default App;