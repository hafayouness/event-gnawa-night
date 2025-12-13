import { useQuery } from "@tanstack/react-query";
import { getEvents, getEventById } from "../api/events";

export const useEvents = () =>
  useQuery({ queryKey: ["events"], queryFn: getEvents });

export const useEvent = (id: number) =>
  useQuery({ queryKey: ["event", id], queryFn: () => getEventById(id) });
