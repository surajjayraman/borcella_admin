"use client";

import Loader from "@/components/custom ui/Loader";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[] | null>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products", {
          method: "GET",
        });
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("products_GET", error);
      }
    };

    getProducts();
  }, []);
    return loading ? <Loader /> : (
        <div className="px-10 py-5">Products page</div>
        
    );
};

export default Products;
