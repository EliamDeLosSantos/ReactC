import type { CartItem, Guitar } from "../types";
import { db } from "../data/db";
//Para un reducer primero se especifican las acciones y luego el state inicial, para luego ir con la funcion en si del reducer
//En el caso de typescript sera necesario primero crear sus respectivos types
//A la hora de llamarlo:   const [state, dispatch] = useReducer(cartReducer, initialState)
//                         retorna el state y el dispatch, y toma la funcion creada del reducer y el initialState

export type CartActions =
    { type: 'add-cart', payload: { item: Guitar } } |
    { type: 'remove-cart', payload: { id: Guitar['id'] } } |
    { type: 'increase-quantity', payload: { id: Guitar['id'] } } |
    { type: 'decrease-quantity', payload: { id: Guitar['id'] } } |
    { type: 'clear-cart' }

export type CartState = {
    Guitars: Guitar[],
    cartItems: CartItem[]
}

const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

const MAX_ITEMS = 10
const MIN_ITEMS = 1

export const initialState: CartState = {
    Guitars: db,
    cartItems: initialCart()
}

export const cartReducer = (
    state: CartState = initialState,
    actions: CartActions
) => {
    if (actions.type === 'add-cart') {
        let upsertedItems: CartItem[] = []
        const itemExists = state.cartItems.find(guitar => guitar.id === actions.payload.item.id)
            if (itemExists) {
                upsertedItems = state.cartItems.map(item => {
                    if (item.id !== actions.payload.item.id) return item

                    if (item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else return item
                })
            }
            else {
                const newItem: CartItem = { ...actions.payload.item, quantity: 1 }
                upsertedItems = [...state.cartItems, newItem]
            }
        return {
            ...state,
            cartItems: upsertedItems,
        }

    }
    if (actions.type === 'remove-cart') {
        const cartItems = state.cartItems.filter(item => item.id !== actions.payload.id)
        return {
            ...state,
            cartItems
        }
    }
    if (actions.type === 'increase-quantity') {
        const cartItems = state.cartItems.map(item => {
            if (item.id === actions.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        }
        )
        return {
            ...state,
            cartItems
        }
    }
    if (actions.type === 'decrease-quantity') {
        const cartItems = state.cartItems.map(item => {
            if (item.id === actions.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        }
        )
        return {
            ...state,
            cartItems
        }
    }
    if (actions.type === 'clear-cart') {
        return {
            ...state,
            cartItems:[]
        }
    }

    return state
}