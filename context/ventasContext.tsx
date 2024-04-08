"use client";
import { VentaFormSchema } from "@/components/ventas/FormSchema";
import { getCustomerByNumberID } from "@/lib/clientes/actions";
import { Producto } from "@/lib/productos/definitions";
import { Venta } from "@/lib/ventas/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn,
  useFieldArray,
  useForm,
} from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type VentaContextType = {
  selectedSale: Venta | null;
  setSelectedSale: (venta: Venta) => void;
  VentaForm: UseFormReturn<z.infer<typeof VentaFormSchema>>;
  saleDetailsFields: FieldArrayWithId<Venta, "saleDetails", "id">[];
  ClearForm: () => void;
  appendSaleDetail: UseFieldArrayAppend<Venta, "saleDetails">;
  removeSaleDetail: UseFieldArrayRemove;
  setVentaFormValues: (venta: Venta) => void;
  setSelectedProductDetails: (producto: Producto, index: number) => void;
  selectedProducts: number[];
  setSelectedProducts: (products: number[]) => void;
  removeThisSelectedProduct: (index: number) => void;
  handleSearchCliente: (numberID: string) => void;
};

export const VentaContext = createContext({});

export const useVentaContext = (): VentaContextType => {
  const context = useContext(VentaContext);
  if (!context) {
    throw new Error("useVentaContext must be used within a VentaProvider");
  }
  return context as VentaContextType;
};

const VentaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSale, setSelectedSale] = useState<Venta | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const VentaForm = useForm<z.infer<typeof VentaFormSchema>>({
    resolver: zodResolver<any>(VentaFormSchema),
    defaultValues: {
      customer_id: "",
      customer_business_name: "",
      customer_ruc: "",
      customer_dni: "",
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      typePayment: "Boleta",
      saleDetails: [
        {
          product_id: "",
          product_name: "",
          product_price: 0,
          quantity: 1,
        },
      ],
    },
  });

  const {
    fields: saleDetailsFields,
    append: appendSaleDetail,
    remove: removeSaleDetail,
  } = useFieldArray({
    control: VentaForm.control,
    name: "saleDetails",
    rules: {
      required: true,
      minLength: 1,
    },
  });

  const ClearForm = () => {
    VentaForm.reset({
      customer_id: "",
      customer_business_name: "",
      customer_ruc: "",
      customer_dni: "",
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      typePayment: "Boleta",
      saleDetails: [
        {
          product_id: "",
          product_name: "",
          product_price: 0,
          quantity: 1,
        },
      ],
    });
    setSelectedSale(null);
  };

  const setVentaFormValues = (venta: Venta) => {
    if (venta) {
      const saleDetails = venta.saleDetails.map((detail) => {
        return {
          product_id: detail.product_id.toString(),
          product_name: detail.product_name,
          product_price: detail.product_price,
          quantity: detail.quantity,
        };
      });

      //Set selected products from saleDetais
      setSelectedProducts(venta.saleDetails.map((d) => Number(d.product_id)));

      VentaForm.reset({
        customer_business_name: venta.customer_business_name ?? "",
        customer_id: venta.customer_id.toString() ?? "",
        customer_ruc: venta.customer_ruc ?? "",
        customer_dni: venta.customer_dni ?? "",
        customer_name: venta.customer_name ?? "",
        customer_email: venta.customer_email,
        customer_phone: venta.customer_phone,
        typePayment: venta.typePayment,
        saleDetails: saleDetails ?? [],
      });
    } else {
      console.log("No hay venta seleccionada");
    }
  };

  function setSelectedProductDetails(producto: Producto, index: number) {
    VentaForm.setValue(
      `saleDetails.${index}.product_id`,
      producto.product_id.toString()
    );
    VentaForm.setValue(`saleDetails.${index}.product_price`, producto.price);
    //edit the quantity input to the maximum stock
    const quantityInput = document.getElementsByName(
      `saleDetails.${index}.quantity`
    );
    if (quantityInput) {
      quantityInput[0].setAttribute("max", producto.stock.toString());
    }

    // set the selected products
    const newSelectedProducts = selectedProducts.filter(
      (p) => p !== Number(VentaForm.getValues("saleDetails")![index].product_id)
    );
    setSelectedProducts([...newSelectedProducts, producto.product_id]);
  }

  //REMOVE THIS SELECTED PRODUCT
  function removeThisSelectedProduct(index: number) {
    setSelectedProducts(
      selectedProducts.filter(
        (p) =>
          p !== Number(VentaForm.getValues("saleDetails")![index].product_id)
      )
    );
  }

  //HANDLE TYPE PAYMENT RADIO BUTTON
  VentaForm.watch((value, { name }) => {
    if (name == "typePayment") {
      VentaForm.reset({
        customer_id: "",
        customer_email: "",
        customer_phone: "",
        customer_dni: "",
        customer_name: "",
        customer_business_name: "",
        customer_ruc: "",
        typePayment: value.typePayment,
      });
      setSelectedProducts([]);
    }
  });

  // HANDLE SEARCH CLIENTE
  async function handleSearchCliente(numberID: string) {
    const typePayment = VentaForm.getValues("typePayment");
    if (!typePayment) return;

    const res = await getCustomerByNumberID(typePayment, numberID);
    if (res.type === "error") {
      toast.error(`No se encontró al cliente ${res.customerType}`);
      VentaForm.reset({
        customer_id: "",
        customer_name: "",
        customer_business_name: "",
        customer_email: "",
        customer_phone: "",
        customer_dni: "",
        customer_ruc: "",
        typePayment: typePayment,
      });
      return;
    } else {
      const data = res.content;
      if (!data) return;
      VentaForm.setValue("customer_id", data.id.toString());
      VentaForm.setValue("customer_email", data.email);
      VentaForm.setValue("customer_phone", data.phone);
      if ("dni" in data) {
        VentaForm.setValue("customer_dni", data.dni);
        VentaForm.setValue("customer_name", data.name);
      } else {
        VentaForm.setValue("customer_ruc", data.ruc);
        VentaForm.setValue("customer_business_name", data.business_name);
      }
    }
  }

  // RETURN VALUES
  const returnValues = {
    VentaForm,
    saleDetailsFields,
    ClearForm,
    appendSaleDetail,
    removeSaleDetail,
    setVentaFormValues,
    setSelectedProductDetails,
    selectedProducts,
    setSelectedProducts,
    removeThisSelectedProduct,
    handleSearchCliente,
  };

  return (
    <VentaContext.Provider
      value={{ selectedSale, setSelectedSale, ...returnValues }}
    >
      {children}
    </VentaContext.Provider>
  );
};

export default VentaProvider;
