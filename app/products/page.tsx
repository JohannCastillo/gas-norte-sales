import LoadingDots from "@/components/loading-dots";
import ProductsAside from "@/components/product/Aside";
import { Suspense } from "react";
import ProductsList from "@/components/product/ProductsList";
import { getProducts } from "services/api/Product";

export default async function Product() {
  let error = false;

  const products = await getProducts().catch((err) => {
    error = true;
    return [];
  });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <aside className="hidden lg:block">
          <ProductsAside products={products} />
        </aside>
        <section className="min-h-screen col-span-3 relative">
          <Suspense
            fallback={
              <div className="w-full h-full grid place-content-center">
                <LoadingDots />
              </div>
            }
          >
            <ProductsList error={error} products={products} />
          </Suspense>
        </section>
      </div>
    </>
  );
}
