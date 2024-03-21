"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
    {
        id: "actions",
        cell: ({ row }) => <Delete />

  },
];
