import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { useEffect, useState, type ChangeEvent } from "react";
import type { ExpenseDraft, Value } from "../types";
import { useBudget } from "../hooks/useBudget";
import ErrorMessage from "./ErrorMessage";

export default function ExpenseForm() {

    const initialExpense = {
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    }
    const [expense, setExpense] = useState<ExpenseDraft>(initialExpense)
    const [previousAmount, setPreviousAmount] = useState(0)
    const [error, setError] = useState('')
    const { dispatch, state, remainingBudget } = useBudget()

    useEffect(() => {
        if(state.editingId){
            const editingExpense = state.expenses.filter(exp => exp.id === state.editingId)[0]
            setExpense(editingExpense)
            setPreviousAmount(editingExpense.amount)
        }
    },[state.editingId])

    const handleChangeDate = (date: Value) => {
        setExpense({
            ...expense,
            date
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Validar
        if (Object.values(expense).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        //Validar que no me pase del limite
        if ((expense.amount - previousAmount) > remainingBudget) {
            setError('Tu no tiene cualto pa eso')
            return
        }
        if(state.editingId){
            dispatch({type: 'update-expense', payload:{expense:{id: state.editingId, ...expense}}})
        }else {
            dispatch({type: 'add-expense', payload:{expense}})
        }
        setExpense(initialExpense)
        setPreviousAmount(0)
    }



    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-blue-600 py-2">
                {state.editingId ? 'Guardar Cambios': 'Nuevo Gasto'}
            </legend>

            {error && (
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            )}

            <div className="flex flex-col gap">
                <label htmlFor="expenseName"
                    className="text-xl">
                    Nombre Gasto:
                </label>
                <input type="text"
                    id="expenseName"
                    name="expenseName"
                    placeholder="Agrega el nombre del gasto"
                    className="bg-slate-100 p-2"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap">
                <label htmlFor="amount"
                    className="text-xl">
                    Cantidad:
                </label>
                <input type="number"
                    id="amount"
                    name="amount"
                    min={1}
                    placeholder="Agrega la cantidad del gasto. Ej: 300"
                    className="bg-slate-100 p-2"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap">
                <label htmlFor="category"
                    className="text-xl">
                    Categoria:
                </label>
                <select
                    id="category"
                    name="category"
                    className="bg-slate-100 p-2"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value={''}>
                        --Seleccione--
                    </option>
                    {
                        categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col gap">
                <label htmlFor="date"
                    className="text-xl">
                    Fecha Gasto:
                </label>
                <DatePicker
                    className={'bg-slate-100 p-2 border-0'}
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>
            <input
                type="submit"
                className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                value=
                {state.editingId ? 'Guardar Cambios': 'Registrar Gasto'}
            />
        </form>
    )
};

