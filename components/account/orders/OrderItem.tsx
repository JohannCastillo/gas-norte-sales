"use client"
import { Accordion } from "flowbite-react";
import OrderDetail from "./OrderDetail";
import { Order, OrderDetails } from "types/Order";
import { Product } from "types/Product";

interface Props {
  order: Order;
}

export default function OrderItem({ order }: Props) {
  const orderDetails: OrderDetails[] = order.orderDetails;
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <div className="w-full flex flex-col justify-between">
            <span className="text-lg font-bold">Order code: {order.order_id}</span>
            <span>
              Created at <strong>{order.order_date}</strong>
            </span>
            <span>
              Shipped to {order.address}
            </span>
            <span className="font-bold mt-2">
              <span className={`px-2 rounded-md py-1 outline`}>{order.status}</span>
            </span>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <ul className="flex flex-col gap-3">
            {orderDetails.map((oDetail) => {
              return (
                <li key={oDetail.detail_id}>
                  <OrderDetail detail={oDetail} />
                </li>
              );
            })}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
