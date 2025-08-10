import type { MenuItems, OrderItem } from "../types";

export type OrderActions = 
    { type: 'add-item', payload: {item:MenuItems}} |
    { type: 'remove-item', payload: {id:MenuItems['id']}} |
    { type: 'place-order'}|
    { type: 'set-tip', payload: {value:number}}

export type OrderState = {
    order:OrderItem[],
    tip:number
}

export const initialState:OrderState = {
    order: [],
    tip:0
}

export const OrderReducer = (
    state: OrderState = initialState,
    actions: OrderActions
) => {

    if(actions.type === 'add-item'){
        let upsertedOrder: OrderItem[] = []
        const itemExists = state.order.find(order => order.id === actions.payload.item.id)
        if (itemExists) {
            upsertedOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem )
        } else {
            const newItem: OrderItem = { ...actions.payload.item, quantity: 1 }
            upsertedOrder = [
                ...state.order,
                newItem
            ]
        }
        return { 
            ...state,
            order : upsertedOrder
        }
    }

    if(actions.type === 'remove-item'){
        return { 
            ...state,
            order : state.order.filter(orderItem => orderItem.id !== actions.payload.id)
        }
    }

    if(actions.type === 'place-order'){
        return { 
            ...state,
            order : [],
            tip: 0
        }
    }

    if(actions.type === 'set-tip'){
        return { 
            ...state,
            tip: actions.payload.value
        }
    }
    return state
}