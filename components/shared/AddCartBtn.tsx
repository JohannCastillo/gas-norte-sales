import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { Product } from "types/Product";

interface Props {
  product: Product
}

export default function AddToCartBtn({ product }: Props) {
  return (
    <Button outline className="w-full" color="dark" disabled={product.stock === 0}>
      <HiShoppingCart className="mr-2 h-5 w-5" />
      Add to the cart
    </Button>
  );
}
