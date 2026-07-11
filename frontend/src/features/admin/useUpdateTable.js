import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateTable } from "./tableApi";

export function useUpdateTable() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, capacity, isActive }) =>
      updateTable(id, capacity, isActive),
    onSuccess: () => {
      toast.success("Table updated");
      queryClient.invalidateQueries({ queryKey: ["tables"] });
    },
    onError: (err) => toast.error(err.message || "Failed to update table"),
  });
}
