import { Button, Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  cardTitle: string;
  discount?: string;
  imageUrl: string;
  description: string;
  buttonText?: string;
  linkRef?: string;
}

export default function CardComponent({
  cardTitle,
  discount,
  imageUrl,
  description,
  buttonText,
  linkRef
}: Props) {
  return (
    <Card>
      <header className="flex justify-between items-center">
        <h3 className="text-2xl font-bold tracking-tight">{cardTitle}</h3>
        {discount && (
          <span className="text-red-500 font-extrabold tracking-tighter">
            {discount}
          </span>
        )}
      </header>

      <Image
        alt={cardTitle}
        className="w-full h-64 object-contain"
        src={imageUrl}
      />

      <p className="mt-2 text-gray-500 dark:text-gray-300">{description}</p>

      {buttonText && linkRef && (
        <Link href={linkRef}>
          <Button className="ml-auto">{buttonText}</Button>
        </Link>
      )}
    </Card>
  );
}
