import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { courseSchema } from "./courses-schema";

export async function getCourses() {
    const data = await fs.readFile(
      path.join(process.cwd(), "src/utils/courses-data/courses.json")
    );

    const courses = JSON.parse(data.toString());

    return z.array(courseSchema).parse(courses);
}