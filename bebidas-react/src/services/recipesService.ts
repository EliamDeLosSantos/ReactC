import { CategoryAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas";
import type { DrinkAPIResponse, SearchFilter } from "../types";
import api from "../lib/axios";

export async function fetchCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await api(url)
    const result = CategoryAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data;
    }
}

export async function fetchDrinks(filters: SearchFilter) {
    const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await api(categoryUrl)
    const result = DrinksAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function fetchRecipesByDrinkId(id: DrinkAPIResponse['idDrink']) {
    const drinkByIdUrl = `/lookup.php?i=${id}`
    const { data } = await api(drinkByIdUrl)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
        return result.data
    }
}