export type Venta = {
  id: number;
  customer_id: number;
  customer_name: string | null;
  customer_business_name: string | null;
  customer_dni: string | null;
  customer_ruc: string | null;
  customer_email: string;
  customer_phone: string;
  sale_date: string;
  typePayment: "Boleta" | "Factura";
  subtotal: number;
  igv: number;
  total: number;
  saleDetails: VentaDetalle[];
};

export type VentaDetalle = {
  id: number;
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  subtotal: number;
};
