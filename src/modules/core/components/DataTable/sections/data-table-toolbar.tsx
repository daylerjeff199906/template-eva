"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

export interface IStatusOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type IPriorityOption = IStatusOption;

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  statusOptions?: IStatusOption[] | undefined;
  priorityOptions?: IPriorityOption[] | undefined;
  hasPriority?: boolean;
  hasStatus?: boolean;
  hasColumnFilters?: boolean;
  hasSearch?: boolean;
}

export function DataTableToolbar<TData>({
  table,
  statusOptions: statuses = [],
  priorityOptions: priorities = [],
  hasPriority = true,
  hasStatus = true,
  hasColumnFilters = true,
  hasSearch = true,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {
          hasSearch && (
            <Input
              placeholder="Buscar..."
              value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px]"
            />
          )
        }
        {hasStatus && table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {hasPriority && table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {hasColumnFilters && <DataTableViewOptions table={table} />}
    </div>
  );
}
