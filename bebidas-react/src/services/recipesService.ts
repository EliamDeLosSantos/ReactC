import axios from "axios";
import { CategoryAPIResponseSchema } from "../schemas";

export async function fetchCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoryAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data;
    }
}