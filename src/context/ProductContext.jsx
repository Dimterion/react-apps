import { createContext, useContext, useEffect, useState } from "react";
import localData from "../data/db.json";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let data;

      try {
        const res = await fetch("/api/products");

        if (
          res.ok &&
          res.headers.get("content-type")?.includes("application/json")
        ) {
          data = await res.json();
        } else {
          console.warn("Could not fetch, using local data.");
          data = localData?.products ?? [];
        }
      } catch (err) {
        console.error("Fetch threw an error:", err.message);
        setError(err.message);
        data = localData?.products ?? [];
      } finally {
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
