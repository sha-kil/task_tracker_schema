import { z } from "zod"

const ProjectBoardSummarySchema = z.object({
  id: z.uuidv7(),
  name: z.string().min(1).max(50),
  description: z.string().max(500),
})

const ProjectOwnerSummarySchema = z.object({
  id: z.uuidv7(),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  email: z.string(),
})

export const ProjectGETSchema = z.object({
  id: z.uuidv7(),
  description: z.string().max(500),
  name: z.string().max(100),
  boards: z.array(ProjectBoardSummarySchema).default([]),
  owner: ProjectOwnerSummarySchema
})

export const ProjectPOSTSchema = ProjectGETSchema.omit({
  id: true,
  owner: true,
}).extend({
  ownerId: z.uuidv7(),
})
