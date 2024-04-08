import { ENVS } from "@/lib/utils/config";
import { ClienteLegal, ClienteNatural } from "./definitions";
import { ensureError } from "../utils/error";

const API_BASE_URL = ENVS.API_BASE_URL;

export async function getCustomerByNumberID(
  typePayment: "Boleta" | "Factura",
  numberID: string
) {
  const customerType = typePayment === "Boleta" ? "natural" : "legal";
  try {
    const res = await fetch(
      `${API_BASE_URL}/customers/${customerType}/${numberID}`
    );

    const data = (await res.json()) as ClienteNatural | ClienteLegal;
    
    return {
        type: "success",
        content: data,
    };
  } catch (error) {
    const e = ensureError(error);
    return {
        type: "error",
        message: e.message,
        customerType: customerType,
    }
  }
}
