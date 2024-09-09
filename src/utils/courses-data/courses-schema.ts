import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const courseSchema = z.object({
  id: z.string(),
  date: z.string(),
  course: z.string(),
  students: z.string(),
  grade: z.string(),
  status: z.string(),
  time: z.string(),
  progress: z.number(),
});

export type Course = z.infer<typeof courseSchema>;
