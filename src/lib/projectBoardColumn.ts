import { z } from "zod"
import { ProjectBoardColumnItemGetSchema } from "./projectBoardColumnItem.ts"

export const ProjectBoardColumnCreateSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(500),
  projectBoardId: z.uuidv7(),
  position: z.number(),
  columnIssues: z.array(ProjectBoardColumnItemGetSchema).default([])
})

export const ProjectBoardColumnUpdateSchema =
  ProjectBoardColumnCreateSchema.omit({
    projectBoardId: true,
  }).partial()

export const ProjectBoardColumnGetSchema =
  ProjectBoardColumnCreateSchema.extend({
    id: z.uuidv7(),
    columnIssues: z.array(ProjectBoardColumnItemGetSchema)
  })

export type ProjectBoardColumn = z.infer<typeof ProjectBoardColumnGetSchema>
export type ProjectBoardColumnCreateData = z.infer<typeof ProjectBoardColumnCreateSchema>
export type ProjectBoardColumnUpdateData = z.infer<typeof ProjectBoardColumnUpdateSchema>
