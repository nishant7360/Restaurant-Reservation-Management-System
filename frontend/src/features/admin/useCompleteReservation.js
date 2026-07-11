import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { markCompleteReservation } from "./adminApi";

export function useCompleteReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markCompleteReservation,
    onSuccess: () => {
      toast.success("Marked as completed");
      queryClient.invalidateQueries({ queryKey: ["allReservations"] });
    },
    onError: (err) => {
      toast.error(err.message || "Failed to mark complete");
    },
  });
}
