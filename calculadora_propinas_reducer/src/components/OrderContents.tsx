import type { Dispatch } from "react"
import { FormatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}
export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.map(orderItem => (
                        <div key={orderItem.id}
                            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                            <div>
                                <p className="text-lg">
                                    {orderItem.name} - {FormatCurrency(orderItem.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {orderItem.quantity} - {FormatCurrency(orderItem.quantity * orderItem.price)}
                                </p>
                            </div>
                            <button 
                            onClick={()=> dispatch({type: 'remove-item', payload:{id:orderItem.id}})}
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:cursor-pointer">
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

