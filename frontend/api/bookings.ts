import { api } from "./axiosInstance";

export const createBooking = (data: any) => api.post("/bookings", data);
export const getBookingById = (id: number) => api.get(`/bookings/${id}`);
export const getBookingByCode = (code: string) =>
  api.get(`/bookings/code/${code}`);
