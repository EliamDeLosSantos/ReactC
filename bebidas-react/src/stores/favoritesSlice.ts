import type { StateCreator } from "zustand";
import type { RecipeAPIResponse } from "../types";

export type FavoritesSliceType = {
    favorites: RecipeAPIResponse[]
    setFavorite: (recipe: RecipeAPIResponse) => void
    favoriteExists: (id: RecipeAPIResponse['idDrink']) => boolean
    loadFromStorage: () => void
}

const FAVORITES_LOCALSTORAGE_KEY = 'favorites'

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => (
    {
        favorites: [],
        setFavorite: (recipe) => {
            if (get().favoriteExists(recipe.idDrink)) {
                set({
                    favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                })
            } else {
                set({
                    favorites: [
                        ...get().favorites,
                        recipe
                    ]
                })
                // set((state) => ({
                //     favorites: [...state.favorites, recipe]  // Another way
                // }))
            }
            localStorage.setItem(FAVORITES_LOCALSTORAGE_KEY, JSON.stringify(get().favorites))
        },
        favoriteExists: (id) => {
            return get().favorites.some(favorite => favorite.idDrink === id)
        },
        loadFromStorage : () => {
            const storedFavorites = localStorage.getItem(FAVORITES_LOCALSTORAGE_KEY);
            if(storedFavorites) {
                set({
                    favorites: JSON.parse(storedFavorites)
                })
            }
        }
    }
)