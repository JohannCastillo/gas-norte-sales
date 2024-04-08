"use server";

import { revalidatePath } from "next/cache";
import { Venta } from "./definitions";
import { ENVS } from "@/lib/utils/config";

const API_BASE_URL = ENVS.API_BASE_URL;

export async function createVenta(formData: FormData) {
  const date = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch(`${API_BASE_URL}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, sale_date: date }),
    });
    if (response.ok) {
      revalidatePath("/ventas");
    } else {
      throw new Error(
        `Error al crear la venta ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function getVentas() {
  const res = await fetch(`${API_BASE_URL}/sales`, {
    method: "GET",
    cache: "no-store",
  }).catch((err) => {
    throw new Error("Could not connect to server ");
  });

  if (!res.ok)
    throw new Error("Failed to fetch data with status " + res.statusText);
  const data: Venta[] = await res.json();
  return data;
}

export async function deleteVenta(id: number) {
  const res = await fetch(`${API_BASE_URL}/sales/${id}/delete`, {
    method: "DELETE",
    cache: "no-store",
  }).catch((err) => {
    throw new Error("Could not connect to server ");
  });

  if (!res.ok)
    throw new Error("Failed to fetch data with status " + res.statusText);

  revalidatePath("/ventas");
}

export async function updateVenta(id: number, formData: FormData) {

  const date = new Date().toISOString().split("T")[0];

  const res = await fetch(`${API_BASE_URL}/sales/${id}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...formData, sale_date: date}),
  }).catch((err) => {
    throw new Error(`Error al conectar con el servidor, actualizar venta: ${err}`);
  });

  if (!res.ok)
    throw new Error("Error al actualizar la venta " + res.statusText );

  revalidatePath("/ventas");
}