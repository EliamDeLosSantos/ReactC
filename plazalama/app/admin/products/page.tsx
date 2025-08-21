import Heading from "@/components/ui/Heading"
import React from "react"
import { prisma } from "@/src/lib/prisma"
import ProductTable from "@/components/products/ProductsTable";

export async function getProducts(){
  const products = prisma.product.findMany();
  return products
}

export default async function ProductsPage () {
  const products = await getProducts()
  return (
    <div>
      <Heading>
        Administrar Productos
      </Heading>
      <ProductTable products={products} />
    </div>
  )
};