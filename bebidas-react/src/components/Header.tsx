import { useEffect, useState, type ChangeEvent, type SubmitEvent} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'
import type { SearchFilter } from '../types'
export default function Header() {
    const [searchFilters, setSearchFilters] = useState<SearchFilter>({
        ingredient:'',
        category:''
    })
    const getCategories = useAppStore((state) => state.getCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    useEffect(() => {
        getCategories()
    },[])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }
    function handleSubmit(e: SubmitEvent<HTMLFormElement>): void {
        e.preventDefault()
        if(Object.values(searchFilters).includes('')){
            console.log('noooo');
            return
        }
        searchRecipes(searchFilters)
    }

    const {pathname} = useLocation()
    const isHome = pathname === '/'

    return (
        <header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className='flex gap-4'>
                        <NavLink
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                            to={'/'}>
                            Inicio
                        </NavLink>
                        <NavLink
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                            to={'/favorites'}>
                            Favoritos
                        </NavLink>
                        {/* <Link
                            className='text-white uppercase font-bold'
                            to={'/'}>
                            Inicio
                        </Link>
                        <Link
                            className='text-white uppercase font-bold'
                            to={'/favorites'}>
                            Favoritos
                        </Link> */}
                    </nav>
                </div>
                {isHome && (
                    <form action=""
                    onSubmit={handleSubmit}
                        className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
                    >
                        <div className='space-y-4'>
                            <label htmlFor="ingredient"
                                className='block text-white uppercase font-extrabold text-lg'
                            >Nombre o ingrediente</label>
                            <input type="text" id='ingredient'
                                name='ingredient'
                                className='p-3 w-full rounded-lg focus:online-none bg-white'
                                placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila'
                                value={searchFilters.ingredient}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='space-y-4'>
                            <label htmlFor="category"
                                className='block text-white uppercase font-extrabold text-lg'
                            >Categoria</label>
                            <select id='category'
                                name='category'
                                className='p-3 w-full rounded-lg focus:online-none bg-white'
                                value={searchFilters.category}
                                onChange={handleChange}
                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Buscar Recetas"
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white
                                font-extrabold w-full p-2 rounded-lg uppercase'
                        />
                    </form>
                )}
            </div>
        </header>
    )
};

