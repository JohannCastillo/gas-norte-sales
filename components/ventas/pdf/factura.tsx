"use client";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Line,
  Image,
} from "@react-pdf/renderer";
// import logo from "../../../public/images/logo.png";
import { Venta, VentaDetalle } from "@/lib/ventas/definitions";

const styles = StyleSheet.create({
  // Estilos existentes

  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 10,
    gap: 2,
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
  },
  subtitle: {
    fontSize: 11,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },

  relleno: {
    fontSize: 8,
    flexDirection: "column",
    gap: 4,
  },

  // Nuevos estilos para la tabla de detalles
  table: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0,
    borderBottomColor: "#000",
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },
});

interface Params {
  venta: Venta;
}

const Factura = ({ venta }: Params) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Datos generales */}
      <View
        style={{
          ...styles.section,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View fixed style={{ flexDirection: "row", gap: 4 }}>
          {/* <Image style={{ width: 80, height: 80 }}  src={logo}/> */}
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontSize: 15, fontFamily: "Helvetica-Bold" }}>
              GAS NORTE PERÚ S.A.
            </Text>
            <Text style={{ ...styles.subtitle, marginTop: "8px" }}>
              Av. Los Álamos #123
            </Text>
            <Text style={styles.subtitle}>Email: gas_norte_sa@gmail.com</Text>

            <Text style={styles.subtitle}>Teléfono: 123456789</Text>
          </View>
        </View>
        <View
          fixed
          style={{
            borderColor: "#000",
            borderWidth: 2,
            width: 200,
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Helvetica-Bold",
          }}
        >
          <Text>FACTURA ELECTRÓNICA</Text>
          <Text>RUC: 20109072144</Text>
          <Text>E001-56</Text>
        </View>
      </View>
      {/* Datos del cliente */}
      <View
        style={{
          ...styles.section,
          borderTopWidth: 1,
          borderTopColor: "#000",
          paddingTop: 12,
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
          DATOS DEL CLIENTE
        </Text>
      </View>
      <View style={{ ...styles.section, ...styles.details }}>
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            Razón Social:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>
              {venta.customer_business_name}
            </Text>
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            RUC:
            <Text style={{ fontFamily: "Helvetica" }}>
              {venta.customer_ruc}
            </Text>
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            Email:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>
              {venta.customer_email}
            </Text>
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            Teléfono:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>
              {venta.customer_phone}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            Fecha de emisión:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>
              {new Date().toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold" }}>
            Fecha de venta:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>
              {
                new Date(venta.sale_date).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              }
            </Text>
          </Text>
        </View>
      </View>
      {/* Tabla de detalles */}
      <View style={styles.table}>
        {/* Encabezado de la tabla */}
        <View
          style={{
            ...styles.tableRow,
            borderBottomWidth: 1,
            borderColor: "#000",
            fontFamily: "Helvetica-Bold",
          }}
        >
          <Text style={styles.tableCell}>DESCRIPCIÓN</Text>
          <Text style={styles.tableCell}>U.M.</Text>
          <Text style={styles.tableCell}>Cantidad</Text>
          <Text style={styles.tableCell}>P. Unit.</Text>
          <Text style={styles.tableCell}>Subtotal</Text>
        </View>

        {/* Filas detalle de venta */}

        {venta.saleDetails.map((detail: VentaDetalle) => {
          return (
            <View key={detail.product_id} style={styles.tableRow}>
              <Text style={{ ...styles.tableCell, textAlign: "left" }}>
                {detail.product_name}
              </Text>
              <Text style={styles.tableCell}>Unidades</Text>
              <Text style={styles.tableCell}>{detail.quantity}</Text>
              <Text style={styles.tableCell}>{detail.product_price}</Text>
              <Text style={styles.tableCell}>{detail.subtotal}</Text>
            </View>
          );
        })}

        {/* Totales */}
        <View
          style={{
            ...styles.tableRow,
            borderTopWidth: 1,
            borderTopColor: "#000",
          }}
        >
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>Sub Total S/</Text>
          <Text style={styles.tableCell}>{venta.subtotal}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}> </Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>IGV S/</Text>
          <Text style={styles.tableCell}>{venta.igv}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>Total S/</Text>
          <Text style={styles.tableCell}>{venta.total}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg height={80} width="100%">
          <Line
            x1={200}
            y1={80}
            x2={380}
            y2={80}
            strokeWidth={1}
            stroke="rgb(0,0,0)"
          />
        </Svg>
      </View>
      <Text style={{ textAlign: "center", ...styles.subtitle }}>Firma</Text>
    </Page>
  </Document>
);

export default Factura;
