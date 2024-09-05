"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableSections } from "@/modules/core";
import { Course } from "@/utils/courses-data/courses-schema";

const { DataTableRowActions } = DataTableSections;

export const teacherColumns: ColumnDef<Course>[] = [
  {
    accessorKey: "date",
    header: "Fecha de evaluación",
  },
  {
    accessorKey: "course",
    header: "Curso",
  },
  {
    accessorKey: "students",
    header: "Alumnos evaluados",
  },
  {
    accessorKey: "grade",
    header: "Grado",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    id: "actions",
    header: "Accion",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
