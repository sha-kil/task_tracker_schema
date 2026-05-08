import { z } from "zod"
import { ProjectBoardColumnGetSchema } from "./projectBoardColumn.ts"

export const ProjectBoardGETSchema = z.object({
  id: z.uuidv7(),
  description: z.string().max(500),
  name: z.string().min(1).max(50),
  projectId: z.uuidv7(),
  columns: z.array(ProjectBoardColumnGetSchema),
})

export const ProjectBoardCreateSchema = ProjectBoardGETSchema.omit({
  id: true,
}).extend({
  columns: z.array(ProjectBoardColumnGetSchema).optional().default([])
})

export const ProjectBoardUpdateSchema = ProjectBoardGETSchema.omit({
  id: true,
}).partial()

export type ProjectBoard = z.infer<typeof ProjectBoardGETSchema>
export type ProjectBoardCreationData = z.infer<typeof ProjectBoardCreateSchema>
export type ProjectBoardUpdateData = z.infer<typeof ProjectBoardUpdateSchema>
