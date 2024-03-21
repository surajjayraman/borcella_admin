"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
