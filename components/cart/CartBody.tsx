import CartItem from "./CartItem";

export default function CartBody() {
  return (
    <section
      className="flex-grow w-full px-4 max-h-[calc(80vh-60px)] overflow-hidden overflow-y-auto  pb-8"
      style={{ scrollbarWidth: "none" }}
    >
      <ul className="w-full flex flex-col gap-4" key={crypto.randomUUID()}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </section>
  );
}
