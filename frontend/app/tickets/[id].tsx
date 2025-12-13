import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { Ionicons } from "@expo/vector-icons";

export default function TicketScreen() {
  const params = useLocalSearchParams();

  const bookingId =
    typeof params.bookingId === "string" ? params.bookingId : "";
  const ticketId = typeof params.ticketId === "string" ? params.ticketId : "";
  const artistName =
    typeof params.artistName === "string" ? params.artistName : "";
  const eventDate =
    typeof params.eventDate === "string" ? params.eventDate : "";
  const price = typeof params.price === "string" ? params.price : "0";
  const tickets = typeof params.tickets === "string" ? params.tickets : "1";

  const handleShare = () => {
    Alert.alert("Partager", "Fonctionnalité de partage à implémenter !");
  };

  return (
    <View style={styles.container}>
      <View style={styles.heeders}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Votre Ticket</Text>
      </View>

      <View style={styles.ticketCard}>
        <Text style={styles.artistName}>{artistName}</Text>
        <Text style={styles.eventDate}>
          {eventDate || "Date non disponible"}
        </Text>
        <Text style={styles.ticketsCount}>Nombre de tickets : {tickets}</Text>
        <Text style={styles.price}>
          Prix total : {Number(price) * Number(tickets)} dh
        </Text>
        <Text style={styles.bookingId}>Booking ID : {bookingId}</Text>
        <Text style={styles.ticketId}>Ticket ID : {ticketId}</Text>

        <View style={styles.qrContainer}>
          <QRCode value={`${bookingId}-${ticketId}`} size={150} />
        </View>
      </View>

      <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
        <Text style={styles.shareText}>Partager le ticket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5E6E0" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 15 },
  ticketCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },
  artistName: { fontSize: 20, fontWeight: "700", marginBottom: 5 },
  eventDate: { fontSize: 16, color: "#555", marginBottom: 5 },
  ticketsCount: { fontSize: 16, marginBottom: 5 },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#6B4423",
  },
  bookingId: { fontSize: 14, color: "#888", marginBottom: 2 },
  ticketId: { fontSize: 14, color: "#888", marginBottom: 15 },
  qrContainer: { marginVertical: 20 },
  shareBtn: {
    backgroundColor: "#6B4423",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  shareText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  heeders: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backBtn: { fontSize: 16, color: "#333" },
});
