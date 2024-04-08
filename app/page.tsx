/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CKZIB4av012
 */

import { redirect } from 'next/navigation';

export default async function Home (){
  redirect('/ventas')
}
// export default function LandingPage() {
//   return (
//     <>
//       <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
//         <Link href="#">
//           <FlagIcon className="h-6 w-6" />
//           <span className="sr-only">Gas Norte</span>
//         </Link>
//       </header>
//       <main className="py-12 md:py-24 lg:py-32">
//         <section className="container px-4 md:px-6">
//           <div className="flex flex-col justify-center space-y-4">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
//               Welcome to{" "}
//               <strong className="text-cyan-700 dark:text-cyan-500">
//                 Gas Norte
//               </strong>
//             </h1>
//             <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Your one-stop shop for the latest and greatest in tech. Explore
//               our wide range of top-tier computer equipment, stay updated with
//               the latest tech trends, and enjoy our exceptional customer
//               service.
//             </p>
//             <Link href={'/products'}>
//               <Button color="dark" outline className="w-fit mx-auto">
//                 Discover More
//               </Button>
//             </Link>
//           </div>
//         </section>
//         <section className="container px-4 md:px-6 my-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
//             Exclusive Offers & Discounts
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <CardComponent
//               cardTitle="Smartphones"
//               discount="30% OFF"
//               description="Get the latest smartphones at a 30% discount and enjoy our free shipping service!"
//               imageUrl="https://xiaomioficial.pe/media/catalog/product/cache/2b88132ea045bae0fc2b44a4f558f9b1/c/e/ce004xia18-poco-x5-5g-lanzamiento-smartphone-celular-nuevo-xiaomi-peru.png"
//               buttonText="Buy now"
//               linkRef="/products"
//             />
//             <CardComponent
//               cardTitle="Drones"
//               discount="50% OFF"
//               description="Explore the skies with our drones. Don't miss out on this 50% discount!"
//               imageUrl="https://static.vecteezy.com/system/resources/previews/016/475/394/original/transparent-drone-uav-in-flight-png.png"
//               buttonText="Buy now"
//               linkRef="/products"
//             />
//             <CardComponent
//               cardTitle="Domotics"
//               discount="10% OFF"
//               description="Automate your home with our domotics. Keep your home safe and secure with our offer!"
//               imageUrl="https://5.imimg.com/data5/SELLER/Default/2022/6/FW/SP/KK/147855799/6-module-wifi-capacitive-touch-ir-remote-500x500.png"
//               buttonText="Buy now"
//               linkRef="/products"
//             />
//           </div>
//         </section>

//         <section className="container px-4 md:px-6 my-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
//             Explore Product Categories
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <CardComponent
//               cardTitle="Servers"
//               description="Servers for any business. From small to large, we sell the best servers in the market."
//               imageUrl="https://static.lenovo.com/ww/img/dc/servers/lenovo-servers-products-towers.png"
//               buttonText="Browse servers"
//               linkRef="/products"
//             />
//             <CardComponent
//               cardTitle="Printers"
//               description="Printers for all your needs. From home to office, we have you covered with the latest tech and best prices."
//               imageUrl="https://mediaserver.goepson.com/ImConvServlet/imconv/d05c3b0f6ca24d3855a0eb6ee084530a35cf9431/original?assetDescr=latin-ecotank-hub_fg-home.png"
//               buttonText="Browse printers"
//               linkRef="/products"
//             />
//             <CardComponent
//               cardTitle="Computers"
//               description="Powerful computers for all your needs. From home to office, find the perfect computer for you."
//               imageUrl="https://dlcdnwebimgs.asus.com/gain/0ad9bdfe-9c75-41fb-82f5-6a6bf25bab22/w800"
//               buttonText="Browse computers"
//               linkRef="/products"
//             />
//           </div>
//         </section>

//         <section className="container px-4 md:px-6 my-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
//             Why Choose Us
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <Card>
//               <ShoppingCartIcon className="w-4 h-4 mb-2" />
//               <h3 className="text-xl font-medium">Competitive Pricing</h3>
//               <p className="text-gray-500">
//                 We offer the best prices for the latest tech products in the
//                 market.
//               </p>
//             </Card>
//             <Card>
//               <TargetIcon className="w-4 h-4 mb-2" />
//               <h3 className="text-xl font-medium">Diverse Product Range</h3>
//               <p className="text-gray-500">
//                 From laptops to accessories, we have a wide range of tech
//                 products to cater to your needs.
//               </p>
//             </Card>
//             <Card>
//               <ShoppingCartIcon className="w-4 h-4 mb-2" />
//               <h3 className="text-xl font-medium">User-Friendly Shopping</h3>
//               <p className="text-gray-500">
//                 Our platform is designed to provide a seamless and enjoyable
//                 shopping experience.
//               </p>
//             </Card>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// function FlagIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   );
// }

// function ShoppingCartIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   );
// }

// function TargetIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="12" r="6" />
//       <circle cx="12" cy="12" r="2" />
//     </svg>
//   );
// }
