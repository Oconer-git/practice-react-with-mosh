
import { useState } from 'react';
import ExpandableText from './components/ExpandableText';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

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

  const addItem = (data: Omit<Expense, 'id'>) => {
    const newId = expenses.length > 0 ? Math.max(...expenses.map(exp => exp.id)) + 1 : 0;
    const newItem = {id: newId, ...data};
    setExpenses([...expenses, newItem]);
  }

  return (
    <div>
      <Form addItem={addItem}/>
      <Table expenses={expenses}/>
    </div>
  )
}

export default App;