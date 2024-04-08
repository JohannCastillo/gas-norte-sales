import Link from "next/link";
import { Product } from "types/Product";
import styles from "./styles.module.css";

export default function ProductCard(Product: Product) {
  return (
    <Link
      href={`/products/${Product.product_id}`}
      className={`${styles.Card} rounded-lg shadow-lg border border-gray-200 hover:scale-[1.02] transition-all duration-300 ease-in-out h-[298px]`}
    >
      <header className="w-full h-[160px] rounded-t-lg text-white">
        <img
          src={
            Product.imageURL ? Product.imageURL : "https://picsum.photos/200"
          }
          alt={Product.name}
          className={`${styles.cardImage} rounded-t-lg`}
        />
      </header>

      <section className="flex flex-col px-2 grow h-[80px]">
        <span className="font-extralight">{Product.brand}</span>
        <h1 className="text-xl font-bold line-clamp-2 hover:underline">
          {Product.title}
        </h1>
      </section>

      <footer className="flex justify-between gap-2 pl-2 pt-2 items-end w-full">
        <span className="text-gray-500 dark:text-gray-200">
          <strong className="text-gray-700 dark:text-gray-400">
            {Product.category}
          </strong>
        </span>
        <span className="flex flex-col text-lg font-bold whitespace-nowrap text-end self-end">
          {Product.discounted && (
            <span className="text-black dark:text-white line-through text-sm px-1 font-extrabold">
              S/. {Product.discounted}
            </span>
          )}
          <strong className="font-extrabold bg-red-500 rounded-br-md rounded-tl-md px-2">S/. {Product.price}</strong>
        </span>
      </footer>
    </Link>
  );
}
