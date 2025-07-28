import ShoppingCartHeader from "../components/ShoppingCartHeader";
import ProductList from "../components/ProductList";

const ShoppingCartPage = () => {
  return (
    <>
      <ShoppingCartHeader />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="mb-6 text-3xl font-bold">🛒 Product Catalog</h1>
        <ProductList />
      </div>
    </>
  );
};

export default ShoppingCartPage;
