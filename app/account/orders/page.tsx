// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import OrderItem from "@/components/account/orders/OrderItem";
// import LoadingDots from "@/components/loading-dots";
// import { Button } from "flowbite-react";
// import { getServerSession } from "next-auth";
// import Link from "next/link";
// import { Suspense } from "react";
// import { getOrderByUserId } from "services/api/Orders";

// export default async function Orders() {
//   const session = (await getServerSession(authOptions)) as any;
//   let error = false;
//   const userOrders = await getOrderByUserId(session?.user.id).catch((err) => {
//     error = true;
//     console.log(err);
//     return [];
//   });

//   function OrdersList() {
//     return (
//       <div className="space-y-4">
//         {userOrders.map((order) => (
//           <OrderItem key={order.order_id} order={order} />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <section className="flex flex-col gap-8">
//       <header className="w-full border-b flex flex-col sm:flex-row justify-between sm:items-center pb-6">
//         <h1 className="text-4xl font-bold">Orders</h1>
//       </header>

//       <article>View your previous orders and their status.</article>

//       <Suspense
//         fallback={
//           <div className="w-full mx-auto">
//             <LoadingDots />
//           </div>
//         }
//       >
//         <article className={`w-full`}>
//           {error ? (
//             <pre className="mx-auto text-red-500">
//               Something went wrong {":("} please try again later
//             </pre>
//           ) : userOrders.length > 0 ? (
//             <OrdersList />
//           ) : (
//             <Empty />
//           )}
//         </article>
//       </Suspense>
//     </section>
//   );
// }

// function Empty() {
//   return (
//     <div className="flex flex-col gap-4 text-center">
//       <header>
//         <h2 className="text-xl font-bold">Your orders history is empty</h2>
//       </header>
//       <p>{"You don't have any orders yet, start shopping now"}</p>

//       <article className={`w-full ${"grid place-content-center"}`}>
//         <Link href="/products">
//           <Button color="dark" className="w-[150px] mx-auto">
//             Shop now
//           </Button>
//         </Link>
//       </article>
//     </div>
//   );
// }
export default async function Orders() {
  return (
    <div>
      Página en construcción
    </div>
  )
}