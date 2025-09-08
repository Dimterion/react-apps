import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {loading && <p>Loading...</p>}
      {error && <div>{error}</div>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
