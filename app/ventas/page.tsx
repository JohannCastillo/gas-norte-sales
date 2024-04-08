import VentasForm from "@/components/ventas/Form";
import VentasTable from "@/components/ventas/Table";
import { getVentas } from "@/lib/ventas/actions";
import { getProducts } from "@/lib/productos/actions";
import { Suspense } from "react";
import VentaProvider from "context/ventasContext";

export default async function Ventas() {
  let error = false;

  const ventas = await getVentas().catch((err) => {
    error = true;
    console.log("Error: ", err);
    return [];
  });

  const products = await getProducts().catch((err) => {
    error = true;
    return [];
  });

  return (
    <section>
      <header className="px-4 w-full flex flex-col sm:flex-row justify-between sm:items-center pb-6">
        <h1 className="text-4xl font-bold">Ventas</h1>
      </header>

      <article className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <VentaProvider>
          <aside className="hidden lg:block col-span-2 px-2 border-r">
            <VentasForm productos={products} />
          </aside>
          <section className="min-h-screen col-span-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Lista de ventas</h2>
            </div>
            <Suspense fallback={"loading..."}>
              <VentasTable ventas={ventas} error={error} />
            </Suspense>
          </section>
        </VentaProvider>
      </article>
    </section>
  );
}
