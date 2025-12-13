import { api } from "./axiosInstance";

export const getEvents = () => api.get("/events");
export const getEventById = (id: number) => api.get(`/events/${id}`);

console.log("events API loaded");
