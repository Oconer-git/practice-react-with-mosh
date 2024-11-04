import React from 'react';
import {FieldValues, useForm, FormState} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    description: z.string().max(100).min(3),
    amount: z.number().max(100).min(1),
    category: z.string()
});

interface Props{
    addItem: (data: FormData) => void;
}

type FormData = z.infer<typeof schema>;

const Form = ({addItem}: Props) => {
    const {
        register, 
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FormData) => {
        addItem(data);
      };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input 
                    {...register('description')}
                    name="description" 
                    id="description" 
                    type="text" 
                    className="form-control"
                />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input 
                    {...register('amount', {valueAsNumber: true})}
                    name="amount" 
                    id="amount" 
                    type="number"  
                    className="form-control"
                />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} name="category" id="category" className="form-control">
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>} 
            </div>
            <button disabled={!isValid} className="btn btn-primary">
                submit
            </button>
        </form>
    )
}

export default Form
