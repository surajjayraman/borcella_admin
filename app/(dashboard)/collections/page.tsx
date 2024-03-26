"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getCollections = async () => {
      try {
        const res = await fetch("/api/collections", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCollections(data);
        setLoading(false);
      } catch (err) {
        console.log("[Collections_getCollections]", err);
      }
    };

    getCollections();
  }, []);

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button
          className="bg-blue-1 text-white"
          onClick={() => router.push("/collections/new")}
        >
          <Plus className="h4 w-4 mr-2" /> Create Collection
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;
