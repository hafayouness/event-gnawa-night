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
import { getArtistById } from "../../api/artists";
import { Artist } from "@/type/type";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [artist, setartist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        if (!id) return;
        const response = await getArtistById(Number(id));
        console.log("Fetched event data:", response.data.event);
        setartist(response.data.artist);
      } catch (error) {
        console.error("Erreur fetch event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#6B4423" />
      </SafeAreaView>
    );
  }

  if (!artist) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Aucun Artist trouvé</Text>
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
          Détails de l'Artist
        </Text>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <Image
          source={{ uri: artist.photo_url }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
            marginBottom: 20,
          }}
          resizeMode="cover"
        />
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          {artist.name}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>{artist.bio}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
