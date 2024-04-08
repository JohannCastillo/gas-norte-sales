"use client"
import { Button } from "flowbite-react";
import Options from "./filters/options";
import LoadingDots from "../loading-dots";
import { Product } from "types/Product";

export default function ProductsAside({ products } : { products: Product[] }) {

  return (
    <aside className="flex flex-col p-3">
      <h1 className="text-3xl text-gray-600 dark:text-gray-400">Productos</h1>
      <h2 className="text-lg font-bold">Todos</h2>

      <span className="my-4 text-sm text-gray-600 dark:text-gray-300">
        Resultados {`(${products.length})`}
      </span>

      <section className="flex flex-col w-full">
        <Options />
        <div className="flex gap-4 mt-4">
          <Button color="dark">Aplicar</Button>
          <Button color="light">Limpiar</Button>
        </div>
      </section>
    </aside>
  );
}

ProductsAside.Skeleton = function Skeleton() {
  return (
    <aside className="flex flex-col p-3">
      <h1 className="text-3xl text-gray-500">Products</h1>

      <span className="my-4 text-sm text-gray-600 dark:text-gray-300">
        <LoadingDots/>
      </span>

      <section className="flex flex-col w-full">
        <Options />
        <div className="flex gap-4 mt-4">
          <Button color="dark">Apply</Button>
          <Button color="light">Reset</Button>
        </div>
      </section>
    </aside>
  );
};