import ProductCard from "./Card";
import styles from "@/app/products/product.module.css";
import { Product } from "types/Product";

export default function ProductsList({
  products,
  error,
}: {
  products: Product[];
  error: boolean;
}) {
  return (
    <div className={styles.productContainer}>
      {error ? (
        <p className="text-gray-500 dark:text-gray-300">Conexión con el servidor desactivada</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.product_id} {...product} />
        ))
      )}
    </div>
  );
}
