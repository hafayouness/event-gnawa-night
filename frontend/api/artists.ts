import { api } from "./axiosInstance";

export const getArtists = () => api.get("/artists");
export const getArtistById = (id: number) => api.get(`/artists/${id}`);
