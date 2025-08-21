import Heading from "@/components/ui/Heading"
import React from "react"
import { prisma } from "@/src/lib/prisma"
import ProductTable from "@/components/products/ProductsTable";

export async function getProducts(pageSize: number = 10, page: number = 1){
  const skip = (page - 1) * pageSize
  const products = prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });
  return products
}
//Folma dura de inferir types en TS
export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage ({searchParams} : {searchParams: { page:string }}) {
  const page = +searchParams.page || 1
  const pageSize = 10
  const products = await getProducts(pageSize, page)
  return (
    <div>
      <Heading>
        Administrar Productos
      </Heading>
      <ProductTable products={products} />
    </div>
  )
};