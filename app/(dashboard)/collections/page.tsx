"use client";
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

  return <div>Collections</div>;
};

export default Collections;
