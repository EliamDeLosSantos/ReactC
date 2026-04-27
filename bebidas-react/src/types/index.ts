import z from "zod";
import type { CategoryAPIResponseSchema } from "../schemas";

export type Categories = z.infer<typeof CategoryAPIResponseSchema>