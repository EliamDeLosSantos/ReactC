'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/schema"

export async function completeOrder(formData: FormData) {
    // 'use server'
    // Esto es si quiero hacer el action en el componente
    const data = {
        orderId: formData.get('order_id')
        //Mete los inputs en un objeto y luego validalos con zod
    }

    const result = OrderIdSchema.safeParse(data)
    if (result.success) {
        try {
            await prisma.order.update({
                where: {
                    id: result.data.orderId
                },
                data: {
                    status: true,
                    orderReadyAt: new Date(Date.now())
                }
            })
            revalidatePath('/admin/order')
        } catch (error) {
            console.log(error)
        }
    }
}