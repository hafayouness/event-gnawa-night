import { useMutation, useQuery } from "@tanstack/react-query";
import { createBooking, getBookingById } from "../api/bookings";

export const useBooking = (id: number) =>
  useQuery({ queryKey: ["booking", id], queryFn: () => getBookingById(id) });

export const useCreateBooking = () =>
  useMutation({
    mutationFn: createBooking,
  });
