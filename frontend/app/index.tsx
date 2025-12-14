import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEvents } from "../api/events";
import { getArtists } from "../api/artists";
import { Event, Artist } from "../type/type";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<"Events" | "Artistes" | "Infos">(
    "Events"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getEvents();
        setEvents(res.data.events);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await getArtists();
        setArtists(res.data.artists);
      } catch (err) {
        console.log(err);
      }
    };
    fetchArtists();
  }, []);

  const navigateToEvent = (id: number) => router.push(`/events/${id}`);
  const navigateToArtist = (id: number) => router.push(`/artist/${id}`);

  const renderEvent = ({ item }: { item: Event }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToEvent(item.id)}
    >
      <Image
        source={{ uri: item.image || "https://via.placeholder.com/300x150" }}
        style={styles.cardImage}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderArtist = ({ item }: { item: Artist }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToArtist(item.id)}
    >
      <Image
        source={{
          uri: item.photo_url || "https://via.placeholder.com/300x150",
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🏺 Gnawa Festival</Text>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.tabContainer}>
        {["Events", "Artistes", "Infos"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab as any)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "Infos" ? (
        <ScrollView contentContainerStyle={styles.infoContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
            }}
            style={styles.infoImage}
          />
          <Text style={styles.infoTitle}>Festival Gnawa - Agadir</Text>
          <Text style={styles.infoText}>
            🎵 Description: Découvrez la magie de la musique Gnawa, entre
            rythmes ancestraux, chants envoûtants et transes collectives. Une
            expérience culturelle unique qui mêle tradition et modernité.
          </Text>
          <Text style={styles.infoText}>📅 Date: 29 Avril 2025</Text>
          <Text style={styles.infoText}>📍 Lieu: Essaouira, Maroc</Text>
          <Text style={styles.infoText}>
            🗓 Programme: Concerts, ateliers de musique traditionnelle,
            démonstrations culturelles.
          </Text>
          <Text style={styles.infoText}>
            🎯 Objectif: Promouvoir la culture Gnawa et le patrimoine musical du
            Maroc.
          </Text>
        </ScrollView>
      ) : (
        <FlatList<Event | Artist>
          data={activeTab === "Events" ? events : artists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            activeTab === "Events"
              ? renderEvent({ item: item as Event })
              : renderArtist({ item: item as Artist })
          }
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5E6E0" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  logo: { fontSize: 22, fontWeight: "700", color: "#6B4423" },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  tab: { paddingHorizontal: 35, paddingVertical: 8, borderRadius: 25 },
  activeTab: { backgroundColor: "#6B4423" },
  tabText: { color: "#6B4423", fontWeight: "600" },
  activeTabText: { color: "white" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: { width: "100%", height: 180 },
  cardInfo: { padding: 15 },
  cardTitle: { fontSize: 18, fontWeight: "700", marginBottom: 5 },
  cardDate: { fontSize: 14, color: "#999" },
  infoContainer: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
  infoImage: { width: "100%", height: 220, borderRadius: 15, marginBottom: 15 },
  infoTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#6B4423",
  },
  infoText: { fontSize: 16, marginBottom: 8, lineHeight: 22 },
});
