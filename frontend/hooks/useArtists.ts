import { useQuery } from "@tanstack/react-query";
import { getArtists, getArtistById } from "../api/artists";

export const useArtists = () =>
  useQuery({ queryKey: ["artists"], queryFn: getArtists });

export const useArtist = (id: number) =>
  useQuery({ queryKey: ["artist", id], queryFn: () => getArtistById(id) });
