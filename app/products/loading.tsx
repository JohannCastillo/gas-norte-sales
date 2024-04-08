"use client";
import ProductsAside from "@/components/product/Aside";

export default function LoadingProductsPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <aside className="hidden lg:block">
          <ProductsAside.Skeleton />
        </aside>
        <section className="min-h-screen col-span-3 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-400 dark:bg-gray-800 shadow-md rounded-md p-4">
                <div className="animate-pulse flex space-x-4 h-[200px] w-[300px]">
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
