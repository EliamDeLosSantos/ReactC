import {v4 as uuidv4} from 'uuid'
import type { Expense, ExpenseDraft } from "../types"

export type BudgetActions = 
{ type: 'add-budget', payload: {budget: number}} |
{ type: 'add-expense', payload: {expense: ExpenseDraft}} |
{ type: 'show-modal'} |
{ type: 'close-modal'} 

export type BudgetState = {
    budget:number
    modal:boolean
    expenses: Expense[]
}

export const initialState: BudgetState = {
    budget: 0,
    modal:false,
    expenses:[]
}

const createExpense = (expenseDraft:ExpenseDraft):Expense => {
    return {
        id:uuidv4(),
        ...expenseDraft
    }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action:BudgetActions
) => {

    if(action.type === 'add-budget'){
        return {
            ...state,
            budget: action.payload.budget
        }
    }
    if(action.type === 'add-expense'){
        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses: [
                ...state.expenses,
                expense
            ],
            modal:false
        }
    }
    if(action.type === 'show-modal'){
        return {
            ...state,
            modal:true
        }
    }
    if(action.type === 'close-modal'){
        return {
            ...state,
            modal:false
        }
    }

    return state
}