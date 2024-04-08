import Link from "next/link";

export default function CartFooter() {
  return (
    <footer className="sticky bottom-0 border-t w-full bg-white dark:bg-black rounded-b-lg">
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold">S/. 0.00</span>
        </div>
        <Link
          href="/cart"
          className="bg-black hover:bg-white hover:text-black border border-black text-white p-2 rounded-md w-full text-center dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-[#070707]"
        >
          Go to cart
        </Link>
      </div>
    </footer>
  );
}
