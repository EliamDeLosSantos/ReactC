'use client'
import { Category } from "@/app/generated/prisma"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category: string}>()
    return (
        <div
            className={`${params.category === category.slug ? 'bg-amber-500' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            <div className="w-16 h-16 relative">
                <Image
                    // width={64}
                    // height={64}
                    fill // Esto es una alternativa al wi y al hei pero pasa a depender del elemento padre
                    src={`/icon_${category.slug}.svg`}
                    alt="Category Image"
                />
            </div>
            <Link href={`/order/${category.slug}`} className="text-4xl font-bold">
                {category.name}
            </Link>
        </div>
    )
};

