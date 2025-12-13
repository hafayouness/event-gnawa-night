import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEventById } from "../../api/events";
import { Event } from "@/type/type";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!id) return;
        const response = await getEventById(Number(id));
        console.log("Fetched event data:", response.data.event);
        setEvent(response.data.event);
      } catch (error) {
        console.error("Erreur fetch event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const navigateToBooking = () => {
    if (!event) return;
    const dateOnly = new Date(event.date).toISOString().split("T")[0];
    router.push({
      pathname: "/booking/[id]",
      params: {
        id: event.id.toString(),
        eventDate: dateOnly,
        artistName: event.title,
        price: event.price?.toString() ?? "0",
      },
    });
  };

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#6B4423" />
      </SafeAreaView>
    );
  }

  if (!event) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Aucun événement trouvé</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5E6E0" }}>
      <View style={{ flexDirection: "row", padding: 20, alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15 }}>
          Détails de l'événement
        </Text>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <Image
          source={{ uri: event.image }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          {event.title}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          {event.description}
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>
          Date: {new Date(event.date).toLocaleDateString()}
        </Text>
        {event.price && (
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 20 }}>
            Prix: {event.price} MAD
          </Text>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: "#6B4423",
            paddingVertical: 15,
            borderRadius: 25,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 40,
          }}
          onPress={navigateToBooking}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Réserver
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
