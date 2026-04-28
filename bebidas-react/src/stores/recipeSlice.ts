import type { StateCreator } from "zustand"
import { fetchCategories, fetchRecipes } from "../services/recipesService"
import type { Categories, DrinksAPIResponse, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories:Categories,
    drinks: DrinksAPIResponse,
    getCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories:{drinks:[]},
    drinks:{drinks:[]},
    getCategories: async () => {
       const categories = await fetchCategories()
       set ({
        categories
       })
    },
    searchRecipes: async (searchFilter: SearchFilter) => {
        const drinks = await fetchRecipes(searchFilter)
        set({
            drinks
        })
        console.log(drinks);
    }
})