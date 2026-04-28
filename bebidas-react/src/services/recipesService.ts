import axios from "axios";
import { CategoryAPIResponseSchema, DrinksAPIResponseSchema } from "../schemas";
import type { SearchFilter } from "../types";

export async function fetchCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoryAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data;
    }
}

export async function fetchRecipes(filters:SearchFilter) {
    const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios.get(categoryUrl)
    const result = DrinksAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}