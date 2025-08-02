import { useCallback, useMemo } from "react"
import type { OrderItem } from "../types"
import { FormatCurrency } from "../helpers"

type OrderTotalsProps ={
    tip:number,
    order:OrderItem[],
    placeOrder:()=> void
}
export default function OrderTotals({tip, order, placeOrder}:OrderTotalsProps) {

    const subTotalAmount = useMemo(()=>order.reduce((total, item)=> total + (item.quantity * item.price) ,0),[order])
    const tipAmount = useMemo(()=> subTotalAmount * tip,[tip, order])
    const totalAmount = useCallback(()=> subTotalAmount + tipAmount, [tip, order])
    //Same as useMemo but for callBacks and need the ()
    // const subTotalAmountCallBack = useCallback(()=>order.reduce((total, item)=> total + (item.quantity * item.price) ,0),[order])
    // const tipAmountCallBack = useCallback(()=> subTotalAmountCallBack() * tip,[tip, order])

    return (
        <>
            <div className="space-y-2">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar:{' '}
                    <span className="font-bold">{FormatCurrency(subTotalAmount)}</span>

                </p>
                <p>Propina:{' '}
                    <span className="font-bold">{FormatCurrency(tipAmount)}</span>

                </p>
                <p>Total a pagar:{' '}
                    <span className="font-bold">{FormatCurrency(totalAmount())}</span>

                </p>
            </div>
            <button className="w-full bg-red-500 p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount() === 0}
            onClick={placeOrder}>
                Guardar Orden
            </button>
        </>
    )
};

