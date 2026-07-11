import { useQuery } from "@tanstack/react-query";
import { getAllTables } from "./tableApi";

export function useTables() {
  return useQuery({
    queryKey: ["tables"],
    queryFn: getAllTables,
  });
}
