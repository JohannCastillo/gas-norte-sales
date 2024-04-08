"use client";
import { useState } from "react";
import { Button, FloatingLabel, Label, Radio, Select } from "flowbite-react";
import { VentaFormSchema } from "./FormSchema";
import { z } from "zod";
import { createVenta, updateVenta } from "@/lib/ventas/actions";
import { Producto } from "@/lib/productos/definitions";
import { HiPlus } from "react-icons/hi";
import toast from "react-hot-toast";
import { useVentaContext } from "context/ventasContext";
import { getCustomerByNumberID } from "@/lib/clientes/actions";

export default function VentasForm({ productos }: { productos: Producto[] }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    VentaForm,
    saleDetailsFields,
    ClearForm,
    removeSaleDetail,
    appendSaleDetail,
    selectedSale,
    setSelectedProductDetails,
    selectedProducts,
    setSelectedProducts,
    removeThisSelectedProduct,
    handleSearchCliente,
  } = useVentaContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = VentaForm;

  const watchType = VentaForm.watch("typePayment");

  async function onSubmit(formData: z.infer<typeof VentaFormSchema>) {
    if (formData.typePayment === "Boleta") {
      formData.customer_business_name = null!;
      formData.customer_ruc = null!;
    } else {
      formData.customer_dni = null!;
      formData.customer_name = null!;
    }

    try {
      setIsLoading(true);
      if (selectedSale) {
        await updateVenta(selectedSale.id, formData as FormData);
        toast.success("Venta actualizada con éxito");
      } else {
        await createVenta(formData as FormData);
        toast.success("Venta registrada con éxito");
      }

      ClearForm();
      setSelectedProducts([]);
    } catch (error) {
      toast.error(`Error al registrar la venta: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside className="flex flex-col px-3">
      <h2 className="text-lg font-bold">Registrar nueva venta</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full dark:text-white [&>div]:pt-4"
      >
        <fieldset className="flex max-w-md flex-col gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Radio
              {...register("typePayment")}
              id="typePayment"
              name="typePayment"
              value="Boleta"
            />
            <Label htmlFor="typePayment">Boleta</Label>
            <Radio
              {...register("typePayment")}
              id="typePayment"
              name="typePayment"
              value="Factura"
            />
            <Label htmlFor="typePayment">Factura</Label>
          </div>
        </fieldset>

        <input
          {...register("customer_id")}
          name="customer_id"
          id="customer_id"
          type="text"
          placeholder="Customer ID"
          className="hidden"
          disabled
        />

        {watchType === "Boleta" ? (
          <div className="pt-0 [&>div]:pt-4">
            <FloatingLabel
              {...register("customer_dni")}
              id="dni"
              label="DNI"
              variant="standard"
              color={errors?.customer_dni && "error"}
              helperText={errors?.customer_dni?.message || `Ingrese el DNI de un cliente y presione enter`}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearchCliente(e.currentTarget.value);
                }
              }}
            />
            {/* Name */}
            <div>
              <FloatingLabel
                {...register("customer_name")}
                id="name"
                label="Nombre"
                variant="standard"
                color={errors?.customer_name && "error"}
                helperText={errors?.customer_name?.message}
                disabled
              />
            </div>
          </div>
        ) : (
          <div className="pt-0 [&>div]:pt-4">
            <FloatingLabel
              {...register("customer_ruc")}
              id="customer_ruc"
              label="RUC"
              variant="standard"
              color={errors?.customer_ruc && "error"}
              helperText={errors?.customer_ruc?.message || `Ingrese el RUC de un cliente y presione enter`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value !== "") {
                  e.preventDefault();
                  handleSearchCliente(e.currentTarget.value);
                }
              }}
            />
            <FloatingLabel
              {...register("customer_business_name")}
              id="business_name"
              label="Razón Social"
              variant="standard"
              color={errors?.customer_business_name && "error"}
              helperText={errors?.customer_business_name?.message}
            />
          </div>
        )}

        <FloatingLabel
          {...register("customer_email")}
          id="Email"
          label="Email"
          variant="standard"
          color={errors?.customer_email && "error"}
          helperText={errors?.customer_email?.message}
          disabled
        />

        <FloatingLabel
          {...register("customer_phone")}
          id="Celular"
          label="Celular"
          variant="standard"
          color={errors?.customer_phone && "error"}
          helperText={errors?.customer_phone?.message}
          disabled
        />

        <div
          className="h-[300px] overflow-hidden overflow-y-scroll px-2 relative mt-2"
          style={{ scrollbarWidth: "thin" }}
        >
          <header className="flex justify-between items-center py-2 px-0 dark:bg-[#070707] z-[1]">
            <h1>Productos {`(${saleDetailsFields.length})`}</h1>
            <button
              type="button"
              onClick={() =>
                appendSaleDetail({
                  id: 0,
                  subtotal: 0,
                  product_price: 0,
                  quantity: 1,
                  product_name: "",
                  product_id: "",
                })
              }
              className="dark:bg-gray-800 dark:text-white p-2 rounded-full shadow-md"
            >
              <HiPlus />
            </button>
          </header>
          {saleDetailsFields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-2 my-4">
              <input
                {...register(`saleDetails.${index}.product_id`)}
                name={`saleDetails.${index}.product_id`}
                type="text"
                placeholder="Product ID"
                className="hidden"
              />

              <div className="max-w-md">
                <Select
                  {...register(`saleDetails.${index}.product_name`)}
                  id="productos"
                  required
                >
                  <option
                    value=""
                    onClick={(e) => {
                      removeThisSelectedProduct(index);
                      VentaForm.setValue(`saleDetails.${index}.product_id`, "");
                      VentaForm.setValue(`saleDetails.${index}.quantity`, 1);
                      VentaForm.setValue(
                        `saleDetails.${index}.product_price`,
                        0
                      );
                    }}
                  >
                    Seleccione un producto
                  </option>
                  {productos
                    .filter(
                      (p) =>
                        !selectedProducts.includes(p.product_id) ||
                        p.product_id ===
                          Number(
                            VentaForm.getValues("saleDetails")![index]
                              .product_id
                          )
                    )
                    .map((producto) => {
                      return (
                        <option
                          value={producto.name}
                          key={producto.product_id}
                          onClick={(e) => {
                            setSelectedProductDetails(producto, index);
                          }}
                        >
                          {producto.name}
                        </option>
                      );
                    })}
                </Select>
              </div>
              <div className="flex [&>input]:w-1/2 gap-2 pt-4">
                <FloatingLabel
                  {...register(`saleDetails.${index}.product_price`)}
                  name={`saleDetails.${index}.product_price`}
                  type="text"
                  variant="standard"
                  label="Precio de venta"
                />
                <FloatingLabel
                  {...register(`saleDetails.${index}.quantity`)}
                  name={`saleDetails.${index}.quantity`}
                  type="number"
                  variant="standard"
                  label="Cantidad"
                  min={1}
                  helperText={`Stock: ${
                    productos.find(
                      (p) =>
                        p.product_id ===
                        Number(
                          VentaForm.getValues("saleDetails")![index].product_id
                        )
                    )?.stock ?? "Seleccione un producto"
                  }`}
                />
              </div>

              <Button
                type="button"
                color="failure"
                onClick={() => {
                  removeThisSelectedProduct(index);
                  removeSaleDetail(index);
                }}
                className="py-0"
                disabled={saleDetailsFields.length === 1}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button type="submit" color="dark" disabled={isLoading}>
            {selectedSale
              ? isLoading
                ? "Actualizando ..."
                : `Actualizar`
              : isLoading
              ? "Registrando ..."
              : "Registrar"}
          </Button>
          <Button
            onClick={() => {
              ClearForm();
              setSelectedProducts([]);
            }}
            color="light"
          >
            Limpiar
          </Button>
        </div>
      </form>
    </aside>
  );
}
