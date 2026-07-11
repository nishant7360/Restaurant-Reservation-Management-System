import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateReservationAdmin } from "./adminApi";

export function useUpdateReservationAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateReservationAdmin(id, data),
    onSuccess: () => {
      toast.success("Reservation updated");
      queryClient.invalidateQueries({ queryKey: ["allReservations"] });
    },
    onError: (err) =>
      toast.error(err.message || "Failed to update reservation"),
  });
}
