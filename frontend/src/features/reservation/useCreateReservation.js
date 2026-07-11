import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createReservation } from "./reservationApi";

export function useCreateReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReservation,
    onSuccess: () => {
      toast.success("Table reserved!");
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create reservation");
    },
  });
}
