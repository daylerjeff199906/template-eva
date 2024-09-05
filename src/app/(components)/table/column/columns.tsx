"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableSections } from "@/modules/core";
import { Task } from "@/utils/data/schema";

const { DataTableRowActions } = DataTableSections;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Task ID",
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
