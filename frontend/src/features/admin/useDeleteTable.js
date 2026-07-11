import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTable } from "./tableApi";

export function useDeleteTable() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTable,
    onSuccess: () => {
      toast.success("Table deleted");
      queryClient.invalidateQueries({ queryKey: ["tables"] });
    },
    onError: (err) => toast.error(err.message || "Failed to delete table"),
  });
}
