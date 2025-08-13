"use client"
import { useStore } from "@/src/store"
import OrderProductDetails from "./OrderProductDetails"
import { useMemo } from "react"

export default function OrderSummary() {
  const order = useStore(state => state.order)
  const total = useMemo(() =>  order.reduce((total, orderItem) => total + orderItem.subtotal, 0) , [order])
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">
        Mi Pedido
      </h1>
      {
        order.length === 0 ? (
          <p className="text-center my-10">Ta vacio</p>
        ) : (
          <div className="mt-5">
              {order.map(orderItem => (
                    <OrderProductDetails key={orderItem.id} orderItem={orderItem}/>
              ))}
              <p className="text-2xl mt-20 text-center">
                Total a pagar {' '}
                <span className="font-bold">
                  {total}
                </span>
              </p>
          </div>
        )
      }
    </aside>
  )
}