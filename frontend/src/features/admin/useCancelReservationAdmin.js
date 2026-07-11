import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cancelReservationAdmin } from "./adminApi";

export function useCancelReservationAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelReservationAdmin,
    onSuccess: () => {
      toast.success("Reservation cancelled");
      queryClient.invalidateQueries({ queryKey: ["allReservations"] });
    },
    onError: (err) =>
      toast.error(err.message || "Failed to cancel reservation"),
  });
}
