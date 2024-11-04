import React from 'react';
import categories from '../categories';
import {useForm, FormState} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    description: z.string().max(50).min(3),
    amount: z.number({invalid_type_error: 'amount is required'}).max(100_000).min(0.01),
    category: z.enum(categories, {
        errorMap: () => ({message: 'category is required'})
    }),
})

type FormData = z.infer<typeof schema>

const ExpenseForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors, isValid} 
    } = useForm<FormData>({resolver: zodResolver(schema)})

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    {...register('description')} 
                    id="decription" 
                    name="description" 
                    type="text" 
                    className="form-control" 
                />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input 
                    {...register('amount', {valueAsNumber: true})}
                    id="amount" 
                    name="amount" 
                    type="number" 
                    className="form-control" 
                />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label"></label>
                <select {...register('category')} name="category" id="category" className="form-select">
                    {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ExpenseForm
