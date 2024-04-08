import Link from "next/link";
import { OrderDetails } from "types/Order";

export default function OrderDetail({ detail }: { detail: OrderDetails }) {
  return (
    <div className="flex flex-col md:flex-row w-full rounded-md p-4 md:items-center justify-center">
      {/* Details */}
      <div className="flex items-center gap-4 w-full">
        <img
          src={detail.product.imageURL}
          alt={detail.product.title}
          className="w-16 h-16 rounded-md shadow-2xl bg-gray-100 dark:bg-gray-700 object-contain text-xs"
        />
        <div className="flex flex-col w-full">
          <Link
            href="/products/1"
            className="text-lg overflow-x-clip text-ellipsis w-full line-clamp-2"
          >
            {detail.product.title}
          </Link>
          <p className="text-sm">{detail.product.category}</p>
          <p className="text-sm">{detail.product.seller}</p>
        </div>
      </div>
      {/* Price and Quantity */}
      <div className="flex flex-col md:text-end">
        <span className="font-extrabold text-lg whitespace-nowrap">
          S/. {detail.price}
        </span>
        <span className="whitespace-nowrap">{`${detail.quantity} ${
          detail.quantity === 1 ? "unidad" : "unidades"
        }`}</span>
      </div>
    </div>
  );
}
