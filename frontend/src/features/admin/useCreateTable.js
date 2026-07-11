import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createTable } from "./tableApi";

export function useCreateTable() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tableNumber, capacity }) =>
      createTable(tableNumber, capacity),
    onSuccess: () => {
      toast.success("Table added");
      queryClient.invalidateQueries({ queryKey: ["tables"] });
    },
    onError: (err) => toast.error(err.message || "Failed to create table"),
  });
}
