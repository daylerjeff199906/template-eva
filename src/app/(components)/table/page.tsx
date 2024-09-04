import { Task, taskSchema } from "./data/schema";
import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";
import { DataTable } from "@/modules/core";
import { columns } from "./column/columns";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(components)/table/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function DemoPage() {
  const tasks = await getTasks();


  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={tasks}
        hasColumnFilters={false}
        hasPagination={false}
        hasSearch={false}
      />
    </div>
  );
}
