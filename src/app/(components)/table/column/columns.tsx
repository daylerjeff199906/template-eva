"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Task } from "../data/schema";
import { DataTableSections } from "@/modules/core";

const { DataTableRowActions } = DataTableSections;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Tasksdfsdf ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
