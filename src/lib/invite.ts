import { z } from "zod"

export const InvitePostSchema = z.object({
  projectId: z.string({ message: "Invalid project ID" }),
  email: z.string({ message: "Invalid email address" }),
})

const InviteUser = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
})

export const InviteGetSchema = z.object({
  invitedBy: InviteUser,
  projectName: z.string(),
  projectId: z.string(),
  inviteeEmail: z.string(),
  expiryDate: z.string(),
})
