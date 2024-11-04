import React, { useState } from 'react'

interface Expenses{
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props{
    expenses: Expenses[];
}

const Table = ({expenses}: Props) => {
    const[category, setCategory] = useState('all');

    return (
        <div className="mt-4">
            <select onChange={(event) => setCategory(event.target.value)} value={category} name="category" id="category" className="form-control mb-2">
                <option value="all">All</option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
            <table className="table table-bordered border">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.filter((category === 'all') 
                            ? item => item.category !== 'all' 
                            : item => item.category === category)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td>Php {item.amount.toFixed(2)}</td>
                                    <td>{item.category}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
