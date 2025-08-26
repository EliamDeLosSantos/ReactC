import Heading from "@/components/ui/Heading"
import React from "react"
import { prisma } from "@/src/lib/prisma"
import ProductTable from "@/components/products/ProductsTable";
import ProductsPagination from "@/components/products/ProductsPagination";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function productsCount() {
  return prisma.product.count()
}

export async function getProducts(pageSize: number = 10, page: number = 1) {
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

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {
  const pageString = await searchParams
  const page = +pageString.page || 1

  if(page < 0 ) redirect("/admin/products")

  const pageSize = 10
  const productsData = await getProducts(pageSize, +page)
  const totalProductsData = await productsCount()
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if (page > totalPages) redirect("/admin/products")

  return (
    <div>
      <Heading>
        Administrar Productos
      </Heading>
      <div>
        <Link
          href={'/admin/products/new'}
          className={'bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'}
        >
          Crear Productos
        </Link>
      </div>
      <ProductTable products={products} />
      <ProductsPagination page={page} totalPages={totalPages} />
    </div>
  )
};