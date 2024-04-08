import { z } from "zod";

const DetalleVentaSchema = z.object({
  product_id: z.coerce.string().optional(),
  product_name: z.string().min(1, "Ingrese el nombre del producto"),
  quantity: z.coerce
    .number()
    .int()
    .min(1, "Ingrese una cantidad positiva mayor a cero"),
  product_price: z.coerce.number().min(1, "Ingrese un precio mayor a cero"),
});

export const VentaFormSchema = z.object({
    customer_id: z.coerce.string(),
    customer_name: z.string().optional(),
    customer_business_name: z.string().optional(),
    customer_dni: z.string().optional(),
    customer_ruc: z.string().optional(),
    customer_email: z.string().min(1, "Ingrese el email del cliente"),
    customer_phone: z.string().min(1, "Ingrese el teléfono del cliente"),
    typePayment: z.enum(["Boleta", "Factura"]),
    saleDetails: z.array(DetalleVentaSchema).min(1, "Ingrese al menos un producto")
  })
  .partial()
  .superRefine((val, ctx) => {
    if (val.typePayment == 'Boleta') {
      if (!val.customer_dni) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El DNI es requerido',
          path: ['customer_dni']
        })
      }
      else if (!/^[0-9]{8}$/.test(val.customer_dni)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'DNI no válido',
          path: ['customer_dni']
        })
      }
      if (!val.customer_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El Nombre es requerido',
          path: ['customer_name']
        })
      }
    } else {
      if (!val.customer_ruc) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'RUC es requerido',
          path: ['customer_ruc']
        })
      }
      else if (!/^[0-9]{11}$/.test(val.customer_ruc)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'RUC no válido',
          path: ['customer_ruc']
        })
      }
      if (!val.customer_business_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Razon social es requerido',
          path: ['customer_business_name']
        })
      }
    }
  })
