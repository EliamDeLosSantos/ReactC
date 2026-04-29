import type { StateCreator } from "zustand"
import { fetchCategories, fetchDrinks, fetchRecipesByDrinkId } from "../services/recipesService"
import type { Categories, DrinkAPIResponse, DrinksAPIResponse, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories:Categories,
    drinks: DrinksAPIResponse,
    getCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe:(id: DrinkAPIResponse['idDrink']) => Promise<void>
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
        const drinks = await fetchDrinks(searchFilter)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const drinkById = await fetchRecipesByDrinkId(id)
        console.log('slRecipe' + id);
    }
})