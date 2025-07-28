import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";

export function useCart() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    //State - Hooks
    //React state is syncronous
    const [database] = useState(db);
    const [cart, setCart] = useState(initialCart);

    const MAX_ITEMS = 10
    const MIN_ITEMS = 1
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExists < 0) {
            item.quantity = 1
            setCart([...cart, item])
        }
        else {
            if (cart[itemExists].quantity >= MAX_ITEMS) return
            const copyState = [...cart];
            copyState[itemExists].quantity++
            setCart(copyState)
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        }
        )
        setCart(updatedCart)
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        }
        )
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }
    const isCartEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])
    // useEffect(()=>{
    //   setDatabase(db)
    // },[]); Esto es recomendado con un API

    // const [auth , setAuth] = useState(false);
    // useEffect(()=>{
    //   console.log("LISTO o escuchando auth");
    // },[auth]);

    return {
        database, cart, clearCart, decreaseQuantity, increaseQuantity, removeFromCart, addToCart, isCartEmpty, cartTotal
    }
}