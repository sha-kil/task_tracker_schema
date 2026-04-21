import { z } from "zod"

export const PrioritySchema = z.object({
  id: z.string(),
  name: z.enum(["low", "medium", "high", "urgent"]),
  value: z.number(),
  description: z.string().optional()
})

export type Priority = z.infer<typeof PrioritySchema>
