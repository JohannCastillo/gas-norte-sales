import { Product } from "./Product"

export type Order = {
    order_id: number,
    customer_id: number,
    order_date: string,
    status: string,
    address: string,
    orderDetails: OrderDetails[]
}

export type OrderDetails = {
    detail_id: number,
    product: Product,
    quantity: number,
    price: number,
    discount: number,
    status: string
}