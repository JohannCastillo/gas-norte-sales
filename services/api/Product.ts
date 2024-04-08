"use server"

import { Product } from "types/Product";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: "GET",
    cache: "no-store",
  }).catch((err) => {
    throw new Error("Could not connect to server ")
  });

  if (!res.ok)
    throw new Error("Failed to fetch data with status " + res.statusText);
  const data: Product[] = await res.json();
  return data;
}

export async function getProductById(id: number) {
  const res = await fetch(`${API_BASE_URL}/products/${id}/details`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok)
    throw new Error("Failed to fetch data with status " + res.statusText);
  const data: Product = await res.json();
  return data;
}

export async function createProduct(product: Product) {
  const res = await fetch(`${API_BASE_URL}/products/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok)
    throw new Error("Failed to create product with status " + res.statusText);

  const data: Product = await res.json();
  console.log("created : " + data);
  return data;
}
