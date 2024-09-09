import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";
import { DataTable } from "@/modules/core";
import { teacherColumns } from "./TeacherColumns";
import { courseSchema } from "@/utils/courses-data";


export default async function TeacherTable() {
  async function getCourses() {
    const data = await fs.readFile(
      path.join(process.cwd(), "src/utils/courses-data/courses.json")
    );

    const courses = JSON.parse(data.toString());

    return z.array(courseSchema).parse(courses);
  }

  const courses = await getCourses();

  return (
    <div>
      <DataTable
        columns={teacherColumns}
        data={courses}
        hasPagination={false}
        hasToolbar={false}
      />
    </div>
  )
}
