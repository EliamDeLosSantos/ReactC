import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

export default function userOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    function addItem(item: MenuItems) {
        const itemExists = order.find(order => order.id === item.id)
        if (itemExists) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                :
                orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    function removeItem(id: OrderItem['id']) {
        setOrder(order.filter(orderItem => orderItem.id !== id))
    }

    function placeOrder(){
        setOrder([])
        setTip(0)
    }

    return { order, tip, setTip, addItem, removeItem, placeOrder }
};

