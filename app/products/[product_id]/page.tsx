import Specs from "@/components/product/details/Specs";
import { getProductById } from "services/api/Product";
import { notFound, redirect } from "next/navigation";
import QuantityInput from "@/components/shared/QuantityInput";
import AddToCartBtn from "@/components/shared/AddCartBtn";

export default async function ProductDetails({
  params,
}: {
  params: { product_id: string };
}) {
  const selectedProduct = await getProductById(Number(params.product_id)).catch(
    (err) => {
      if (err.message === "Failed to fetch data with status Not Found") {
        notFound();
      }
      redirect('/products')
    }
  );
  return (
    <section
      className={`min-h-screen m-4 md:mt-20 md:ml-20 grid grid-cols-1 md:grid-cols-2`}
    >
      <picture className="w-full h-full">
        <img
          src={selectedProduct.imageURL}
          alt={selectedProduct.name}
          className="object-contain text-black min-w-full min-h-[200px] md:h-[500px]"
        />
      </picture>
      <article className="flex flex-col gap-8 md:px-4 relative">
        <header className="flex flex-col xl:flex-row justify-between gap-9 border-b">
          <div className="flex flex-col gap-2">
            <span className="font-extralight text-lg">
              {selectedProduct?.brand}
            </span>
            <h1 className="text-xl font-semibold">{selectedProduct.title}</h1>
          </div>
        </header>

        <section className="flex flex-col lg:flex-row gap-4">
          <article className="w-full lg:w-[50%]">
            <h1 className="text-lg font-semibold mb-2">Product information</h1>
            <p className="md:max-w-[550px]">{selectedProduct.description}</p>
          </article>

          {/* Product price, discount and add to cart button */}
          <div className="flex flex-col w-full h-fit lg:w-[50%] text-black bg-gray-100 dark:bg-black dark:text-white rounded-md pb-2 px-4">
            {/* Price and discount */}
            <div className="flex flex-wrap lg:flex-col justify-between items-center lg:items-start w-full mt-2">
              <span className="whitespace-nowrap text-2xl font-extrabold">
                S/. {selectedProduct.price}
              </span>
              <span className="px-4 py-1 bg-black dark:bg-gray-700 rounded-md w-fit text-white font-semibold line-through ">
                S/.{selectedProduct.discounted}
              </span>
            </div>
            {/* Quantity controls */}
            <div className="w-full mt-2">
              <QuantityInput initial={1} max={selectedProduct.stock} />
            </div>

            {/* Button */}
            <AddToCartBtn product={selectedProduct} />
          </div>
        </section>
      </article>

      <article className="w-full mt-4 md:mt-12 md:col-span-2">
        {selectedProduct!.specs.length > 0 && (
          <>
            <h1 className="text-xl font-bold mb-4">Technical Specifications</h1>
            <Specs specs={selectedProduct.specs} />
          </>
        )}
      </article>
    </section>
  );
}
