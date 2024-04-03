"use client";

import Delete from "@/components/custom ui/Delete";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link href={`/products/${row.original._id}`} className="hover:text-red-1">
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => (
      <div>
        {row.original.collections.map((collection) => (
          <p key={collection._id} className="text-sm">
            {collection.title}
          </p>
        ))}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
