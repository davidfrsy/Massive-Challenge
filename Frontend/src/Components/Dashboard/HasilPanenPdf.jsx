import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../Assets/logo-dark-blue.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  logoContainer: {
    display: "flex",
    marginBottom: 20,
  },
  logo: {
    width: 100,
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#1E90FF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "16.66%",
    backgroundColor: "#e0e0e0",
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
  },
  tableCol: {
    width: "16.66%",
    padding: 5,
    textAlign: "center",
    fontSize: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 8,
  },
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const date = new Date(dateString);
  if (isNaN(date)) return "Invalid Date";
  return date.toLocaleDateString("id-ID", options);
};

const HasilPanenPDF = ({ data }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.logoContainer}>
            <Image src={logo} style={styles.logo} />
            </View>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Budidaya Ikan</Text>
            <Text style={styles.subtitle}>Laporan Hasil Panen</Text>
            </View>
            <View style={styles.table}>
            <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>Tanggal</Text>
                <Text style={styles.tableColHeader}>Pemeliharaan</Text>
                <Text style={styles.tableColHeader}>Jenis</Text>
                <Text style={styles.tableColHeader}>Harga</Text>
                <Text style={styles.tableColHeader}>Berat (Kg)</Text>
                <Text style={styles.tableColHeader}>Total</Text>
            </View>
            {data.map((row, index) => (
                <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{formatDate(row.tanggal)}</Text>
                <Text style={styles.tableCol}>{row.pemeliharaan}</Text>
                <Text style={styles.tableCol}>{row.jenis}</Text>
                <Text style={styles.tableCol}>{row.harga}</Text>
                <Text style={styles.tableCol}>{row.berat}</Text>
                <Text style={styles.tableCol}>{row.total}</Text>
                </View>
            ))}
            </View>
            <Text style={styles.footer}>
            Laporan ini dibuat oleh Sistem Budidaya Ikan
            </Text>
        </Page>
    </Document>
);

export default HasilPanenPDF;
