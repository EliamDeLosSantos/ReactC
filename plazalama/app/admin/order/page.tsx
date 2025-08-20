import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading"
import { products } from "@/prisma/data/products";
import { prisma } from "@/src/lib/prisma"
import React from "react"

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      OrderProducts: {
        include: {
          Product: true
        }
      }
    }
  });
  return orders
}

export default async function AdminOrderPage() {
  const orders = await getPendingOrders()
  // console.log(JSON.stringify(orders, null, 2))
  // debug 
  return (
    <>
      <Heading>
        Administrar Ordenes
      </Heading>
      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {
            orders.map(order => (
              <OrderCard key={order.id}/>
            ))
          }
        </div>
      ) : <p className="text-center"> No hay ordenes </p>}
    </>
  )
}