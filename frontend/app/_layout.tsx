import { Stack } from "expo-router";
import * as Linking from "expo-linking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

const client = new QueryClient();

export default function RootLayout() {
  const hydrate = useAppStore((s: any) => s.hydrateStore);

  useEffect(() => {
    hydrate();
  }, []);

  const linking = {
    prefixes: ["gnawa://", Linking.createURL("/")],
    config: {
      screens: {
        index: "",
        events: {
          screens: {
            index: "events",
            id: "events/:id",
          },
        },
        artists: {
          screens: {
            id: "artists/:id",
          },
        },
        booking: {
          screens: {
            id: "booking/:id",
          },
        },

        payment: "payment",
        tickets: {
          screens: {
            id: "tickets/:id",
          },
        },
      },
    },
  };

  return (
    <QueryClientProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
