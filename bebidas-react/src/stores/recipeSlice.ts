import type { StateCreator } from "zustand"
import { fetchCategories, fetchDrinks, fetchRecipesByDrinkId } from "../services/recipesService"
import type { Categories, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponse, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories:Categories,
    drinks: DrinksAPIResponse,
    selectedRecipe: RecipeAPIResponse,
    modal:boolean,
    getCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe:(id: DrinkAPIResponse['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories:{drinks:[]},
    drinks:{drinks:[]},
    selectedRecipe:{} as RecipeAPIResponse,
    modal:false,
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
        set({
            selectedRecipe: drinkById,
            modal:true
        })
    },
    closeModal: () => {
        set({
            modal:false,
            selectedRecipe:{} as RecipeAPIResponse
        })
    }
})