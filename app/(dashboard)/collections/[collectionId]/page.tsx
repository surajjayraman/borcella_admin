"use client";

import { useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  useEffect(() => {
    const getCollectionDetails = async () => {
      try {
        const res = await fetch(`/api/collections/${params.collectionId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCollectionDetails(data);
        setLoading(false);
      } catch (err) {
        console.log("[CollectionDetails_getCollectionDetails]", err);
      }
    };

    getCollectionDetails();
  }, [params.collectionId]);

  return <div>CollectionDetails</div>;
};

export default CollectionDetails;
