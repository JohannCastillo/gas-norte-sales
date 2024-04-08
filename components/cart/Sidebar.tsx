"use client";

import { useAppContext } from "context/appContext";
import CartFooter from "./CartFooter";
import CartBody from "./CartBody";

export default function Sidebar() {
  const context = useAppContext();

  return (
    <aside
      id="shopping-cart"
      className={`flex flex-col absolute top-[60px] right-[20px] border h-auto w-full md:w-[500px] z-[10] bg-white dark:bg-black transition-all ease-in-out duration-500 rounded-lg shadow-lg
      ${context.cartVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onMouseEnter={() => context.toggleCartVisible(true)}
      onMouseLeave={() => context.toggleCartVisible(false)}
    >
      <header className="p-4 mx-auto">
        <h1 className="text-lg font-bold">Carrito</h1>
      </header>

      <CartBody />

      <CartFooter />
    </aside>
  );
}
