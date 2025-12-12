import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAppStore = create((set, get) => ({
  selectedEvent: null,
  selectedArtist: null,
  ticket: null,

  setSelectedEvent: (e: any) => set({ selectedEvent: e }),
  setSelectedArtist: (a: any) => set({ selectedArtist: a }),
  setTicket: (t: any) => set({ ticket: t }),

  hydrateStore: async () => {
    const data = await AsyncStorage.getItem("APP_STORE");
    if (data) set(JSON.parse(data));
  },

  persist: async () => {
    await AsyncStorage.setItem("APP_STORE", JSON.stringify(get()));
  },
}));
