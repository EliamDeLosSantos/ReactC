import z from "zod";

export const CategoryAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        }))
})