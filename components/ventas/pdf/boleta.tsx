import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Venta, VentaDetalle } from "@/lib/ventas/definitions";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 10,
    gap: 2,
    fontFamily: "Courier",
  },
  section: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 8,
  },
  title: {
    fontSize: 9,
    fontFamily: "Courier-Bold",
  },
  subtitle: {
    fontSize: 8,
    fontWeight: "light",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },

  relleno: {
    fontSize: 8,
    flexDirection: "column",
    gap: 4,
  },

  /* DETAILS HEADERS */
  producto: {
    width: "135px",
  },
  cantidad: {
    width: "40px",
  },
  precio: {
    width: "45px",
  },
  subtotal: {
    width: "56px",
    textAlign: "right",
  },
});

interface Params {
  venta: Venta;
}

const Boleta = ({ venta }: Params) => (
  <Document>
    <Page size={{ width: 250, height: 500 }} style={styles.page}>
      <View style={{ ...styles.section, textAlign: "center" }} fixed>
        <Text style={{ ...styles.title }}>Gas Norte</Text>
        <Text style={{ ...styles.title }}>GAS NORTE PERÚ S.A.</Text>
        <Text style={styles.subtitle}>Calle Augusto Angulo Nro 130</Text>
        <Text style={styles.subtitle}>Telefono: 625 0000 Anx 5401</Text>
        <Text style={styles.subtitle}> RUC 20109072144</Text>

        <Text style={{ ...styles.title, marginTop: 5 }}>
          BOLETA DE VENTA ELECTRÓNICA
        </Text>
        <Text style={styles.subtitle}>N° {venta.id}</Text>
      </View>
      {/* Customer Details */}
      <View style={{ ...styles.section, flexDirection: "column", gap: 2 }}>
        <Text>CLIENTE: {venta.customer_name}</Text>
        <Text>DNI: {venta.customer_dni}</Text>
      </View>
      {/* Detalles */}
      <View style={styles.section}>
        <View
          style={{
            ...styles.details,
            fontFamily: "Courier-Bold",
            marginBottom: 2,
          }}
        >
          {/* Headers */}

          <Text style={styles.producto}>PRODUCTO </Text>
          <Text style={styles.cantidad}>CANT.</Text>
          <Text style={styles.precio}>P.VENT</Text>
          <Text style={styles.subtotal}>SUB.TOT</Text>
        </View>
        {/* Sales Details */}

        {venta.saleDetails.map((detail : VentaDetalle) => {
          return (
            <View key={detail.product_id} style={styles.details}>
              <Text style={styles.producto}>{detail.product_name}</Text>
              <Text style={styles.cantidad}>{detail.quantity}</Text>
              <Text style={styles.precio}>{detail.product_price}</Text>
              <Text style={styles.subtotal}>{detail.subtotal}</Text>
            </View>
          );
        })}

        {/* TOtal */}
        <View
          style={{
            textAlign: "right",
            borderTop: "1px dashed #000",
            marginTop: 4,
            paddingTop: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignSelf: "flex-end",
            }}
          >
            <Text style={{ textAlign: "right" }}>Total S/ </Text>
            <Text style={{ width: "60px" }}>{venta.total}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignSelf: "flex-end",
            }}
          >
            <Text style={{ textAlign: "right" }}>IGV S/ </Text>
            <Text style={{ width: "60px" }}>{venta.igv}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignSelf: "flex-end",
            }}
          >
            <Text style={{ textAlign: "right" }}>OP. GRAVADA S/ </Text>
            <Text style={{ width: "60px" }}>{venta.subtotal}</Text>
          </View>
        </View>
      </View>
      {/* Relleno */}
      <View style={{ ...styles.section, ...styles.relleno }}>
        <Text>Políticas de cambios y Devoluciones</Text>
        <Text>
          1. Mostrar el comprobamte de pago. Es requisito indispensable según
          SUNAT
        </Text>
        <Text>
          2. Periodo máximo de cambio 7 días calendario después de la compra.
        </Text>
        <Text>
          3. El producto debe estar en buen estado.
        </Text>
        <Text>
          4. En caso excepcional se requiere devolución de dinero, habrá un
          cargo de 10% sobre el valor de la compra por gastos administrativos.
        </Text>
        <Text>
          5. Los productos NO tienen cambios ni devoluciones.
        </Text>
      </View>
      <View>
        <Text style={{ ...styles.title, textAlign: "center" }}>
          ¡Gracias por su compra!
        </Text>
      </View>
      <View>
        <Text style={{ ...styles.subtitle, textAlign: "center" }}>
          Fecha de emisión: {venta.sale_date}
        </Text>
      </View>
    </Page>
  </Document>
);

export default Boleta;
