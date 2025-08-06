import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'

const prismaClient = prisma

async function getCategories(){
  return await prismaClient.category.findMany()
}

export default async function OrderSidebar () {
  const categories =  await getCategories()
  return (
    <section className="md:w-80 md:h-screen bg-white">
        <nav className='mt-10'>
          {categories.map((category)=>(
            <CategoryIcon key={category.id} category={category}/>
          ))}
        </nav>
    </section>
  )
}