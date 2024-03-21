"use client";
import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import React, { useEffect, useState } from "react";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

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
    <div>
      <DataTable columns={columns} data={collections} />
    </div>
  );
};

export default Collections;
