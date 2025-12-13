import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { createBooking } from "../../api/bookings";

export default function BookingScreen() {
  const params = useLocalSearchParams();

  const eventId = typeof params.id === "string" ? params.id : "";
  const eventDate =
    typeof params.eventDate === "string" ? params.eventDate : "";
  const artistName =
    typeof params.artistName === "string" ? params.artistName : "";
  const price = typeof params.price === "string" ? params.price : "0";

  const [tickets, setTickets] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!name || !email || !phone) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    try {
      const bookingData = {
        name,
        email,
        phone,
        event_id: eventId,
        tickets,
        paymentMethod,
      };

      const res = await createBooking(bookingData);
      const { booking_id, ticket_id } = res.data.booking;

      Alert.alert(
        "Réservation réussie",
        `Booking ID: ${booking_id}\nTicket ID: ${ticket_id}`
      );

      router.push({
        pathname: "/tickets/[id]",
        params: {
          bookingId: booking_id,
          ticketId: ticket_id,
          artistName,
          eventDate,
          price,
          tickets: tickets.toString(),
        },
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de réserver pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Réserver</Text>
        </View>

        <View style={styles.eventCard}>
          <Text style={styles.eventName}>{artistName}</Text>
          <Text style={styles.eventDate}>
            {eventDate || "Date non disponible"}
          </Text>
          <Text style={styles.eventPrice}>Prix : {price} dh</Text>
        </View>

        <View style={styles.ticketSelector}>
          <Text>Nombre de tickets</Text>
          <View style={styles.counter}>
            <TouchableOpacity
              onPress={() => setTickets(Math.max(1, tickets - 1))}
            >
              <Text style={styles.counterBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{tickets}</Text>
            <TouchableOpacity onPress={() => setTickets(tickets + 1)}>
              <Text style={styles.counterBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Nom complet"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            placeholder="Téléphone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <View style={styles.paymentContainer}>
          <Text style={styles.paymentTitle}>Mode de paiement</Text>
          <View style={styles.paymentGroup}>
            <TouchableOpacity onPress={() => setPaymentMethod("card")}>
              <Text
                style={
                  paymentMethod === "card"
                    ? styles.selectedPayment
                    : styles.payment
                }
              >
                Carte bancaire
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod("cash")}>
              <Text
                style={
                  paymentMethod === "cash"
                    ? styles.selectedPayment
                    : styles.payment
                }
              >
                Espèces
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={handleBooking}
          disabled={loading}
        >
          <Text style={styles.confirmText}>
            {loading ? "Réservation..." : "Confirmer la réservation"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#F5E6E0" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 15 },
  eventCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  eventName: { fontSize: 16, fontWeight: "700" },
  eventDate: { fontSize: 14, color: "#555" },
  eventPrice: { marginTop: 5, fontWeight: "600", color: "#6B4423" },
  ticketSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  counter: { flexDirection: "row", alignItems: "center" },
  counterBtn: { fontSize: 24, paddingHorizontal: 10 },
  counterValue: { fontSize: 18, marginHorizontal: 10 },
  inputGroup: { marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff5f0",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#6B4423",
    textAlign: "center",
  },
  paymentGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  payment: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "#333",
    fontWeight: "500",
  },
  selectedPayment: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#6B4423",
    color: "#fff",
    fontWeight: "600",
  },
  confirmBtn: {
    backgroundColor: "#6B4423",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  confirmText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
