"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schema"

export default async function CreateOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)
    if(!result.success){
        return {
            errors: result.error.issues
        }
    }

    try{
        // console.log(data)
        await prisma.order.create({
            data: {
                name: result.data.name,
                total: result.data.total,
                OrderProducts: {
                    create: result.data.order.map(product => ({
                        ProductId: product.id,
                        Quantity: product.quantity
                    }))
                }
            }
        })
    }catch(error){
        console.log(error)
    }
}