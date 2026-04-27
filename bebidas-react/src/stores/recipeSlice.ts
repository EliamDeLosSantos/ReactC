import type { StateCreator } from "zustand"
import { fetchCategories } from "../services/recipesService"
import type { Categories } from "../types"

export type RecipesSliceType = {
    categories:Categories
    getCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories:{drinks:[]},
    getCategories: async () => {
       const categories = await fetchCategories()
       set ({
        categories
       })
    }
})