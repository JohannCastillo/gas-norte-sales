"use client";
import { Venta } from "@/lib/ventas/definitions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Factura from "./pdf/factura";
import Boleta from "./pdf/boleta";
import { CiReceipt, CiFileOn } from "react-icons/ci";
import {
  RiEdit2Fill,
  RiDeleteBin2Line,
  RiArrowGoBackFill,
} from "react-icons/ri";
import { deleteVenta } from "@/lib/ventas/actions";
import toast from "react-hot-toast";
import { useVentaContext } from "context/ventasContext";
import { VENTA_EXAMPLES } from "constants/api/examples";

export default function VentasTable({
  ventas,
  error,
}: {
  ventas: Venta[];
  error: boolean;
}) {
  const [venta, setVenta] = useState<Venta | null>(null);
  const context = useVentaContext();

  function handleEditVenta(venta: Venta) {
    context.setSelectedSale(venta);
    context.setVentaFormValues(venta);
  }

  async function handleDeleteVenta(id: number) {
    try {
      await deleteVenta(id);
      toast.success("Venta eliminada");
    } catch (error) {
      toast.error(`Error al eliminar la venta: ${error}`);
    }
  }

  function RenderPDF() {
    if (venta === null) return <></>;
    return (
      <PDFViewer
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {venta.typePayment === "Boleta" ? (
          <Boleta venta={venta} />
        ) : (
          <Factura venta={venta} />
        )}
      </PDFViewer>
    );
  }

  return (
    <div>
      {venta ? (
        <div>
          <button
            onClick={() => setVenta(null)}
            className="flex gap-2 items-center px-2 my-4"
          >
            <RiArrowGoBackFill size={24} />
            <span className="font-semibold text-md">Atrás</span>
          </button>
          <RenderPDF />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Cliente</TableHeadCell>
              {/* <TableHeadCell>Tipo</TableHeadCell> */}
              <TableHeadCell>DNI/RUC</TableHeadCell>
              <TableHeadCell>Celular</TableHeadCell>
              <TableHeadCell>Fecha Venta</TableHeadCell>
              <TableHeadCell>Total</TableHeadCell>
              <TableHeadCell>Documento</TableHeadCell>
              <TableHeadCell>Acciones</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {VENTA_EXAMPLES.map((venta) => (
                <TableRow key={venta.id}>
                  <TableCell>
                    {venta.customer_name ?? venta.customer_business_name}
                  </TableCell>

                  {/* <TableCell>{venta.typePayment}</TableCell> */}

                  <TableCell>
                    {venta.customer_dni ?? venta.customer_ruc}
                  </TableCell>

                  <TableCell>{venta.customer_phone}</TableCell>
                  <TableCell>{venta.sale_date}</TableCell>
                  <TableCell>{`S/${venta.total}`}</TableCell>

                  <TableCell className="text-center">
                    <button
                      onClick={() => {
                        setVenta(venta);
                      }}
                      className="flex flex-col items-center gap-2 mx-auto"
                    >
                      {venta.typePayment === "Boleta" ? (
                        <CiReceipt size={25} />
                      ) : (
                        <CiFileOn size={25} />
                      )}
                      <span className="text-xs">{venta.typePayment}</span>
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleEditVenta(venta)}
                        className="text-blue-700 dark:text-blue-400"
                      >
                        <RiEdit2Fill size={24} />
                      </button>
                      <button
                        onClick={() => handleDeleteVenta(venta.id)}
                        className="text-red-500 dark:text-red-400"
                      >
                        <RiDeleteBin2Line size={24} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {ventas.map((venta) => (
                <TableRow key={venta.id}>
                  <TableCell>
                    {venta.customer_name ?? venta.customer_business_name}
                  </TableCell>

                  {/* <TableCell>{venta.typePayment}</TableCell> */}

                  <TableCell>
                    {venta.customer_dni ?? venta.customer_ruc}
                  </TableCell>

                  <TableCell>{venta.customer_phone}</TableCell>
                  <TableCell>{venta.sale_date}</TableCell>
                  <TableCell>{`S/${venta.total}`}</TableCell>

                  <TableCell className="text-center">
                    <button
                      onClick={() => {
                        setVenta(venta);
                      }}
                      className="flex flex-col items-center gap-2 mx-auto"
                    >
                      {venta.typePayment === "Boleta" ? (
                        <CiReceipt size={25} />
                      ) : (
                        <CiFileOn size={25} />
                      )}
                      <span className="text-xs">{venta.typePayment}</span>
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleEditVenta(venta)}
                        className="text-blue-700 dark:text-blue-400"
                      >
                        <RiEdit2Fill size={24} />
                      </button>
                      <button
                        onClick={() => handleDeleteVenta(venta.id)}
                        className="text-red-500 dark:text-red-400"
                      >
                        <RiDeleteBin2Line size={24} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
