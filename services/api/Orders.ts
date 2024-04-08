import { Order } from "types/Order";
import {API_BASE_URL} from './base'

export async function getOrderByUserId(userId : string) {
  console.log(API_BASE_URL)
    const res = await fetch(`${API_BASE_URL}/orders/customer-orders/${userId}`, {
      method: "GET",
      cache: "no-store",
    }).catch((err) => {
      throw new Error("Could not connect to server " + err)
    });

    if (!res.ok)
      throw new Error("Failed to fetch order data with status " + res.statusText);

    const data: Order[] = await res.json();
    return data;
  }