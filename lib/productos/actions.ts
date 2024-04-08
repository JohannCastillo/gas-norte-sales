import { ENVS } from "@/lib/utils/config";
import { Producto } from "./definitions";

const API_BASE_URL = ENVS.API_BASE_URL;

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: "GET",
    cache: "no-store",
  }).catch((err) => {
    throw new Error("Could not connect to server ");
  });

  if (!res.ok)
    throw new Error("Failed to fetch data with status " + res.statusText);
  
  const data: Producto[] = await res.json();
  return data;
}
