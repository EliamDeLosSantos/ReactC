import z from "zod";
import type { CategoryAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema } from "../schemas";

export type Categories = z.infer<typeof CategoryAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type DrinksAPIResponse = z.infer<typeof DrinksAPIResponseSchema>
export type DrinkAPIResponse = z.infer<typeof DrinkAPIResponseSchema>