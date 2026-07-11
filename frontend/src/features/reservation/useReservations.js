import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getAllReservations, cancelReservation } from "./reservationApi";

export function useReservations() {
  return useQuery({
    queryKey: ["reservations"],
    queryFn: getAllReservations,
  });
}

export function useCancelReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelReservation,
    onSuccess: () => {
      toast.success("Reservation cancelled");
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
    onError: (err) => {
      toast.error(err.message || "Failed to cancel reservation");
    },
  });
}
