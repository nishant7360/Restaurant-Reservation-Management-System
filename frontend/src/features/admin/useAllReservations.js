import { useQuery } from "@tanstack/react-query";
import { getAllReservations } from "./adminApi";

export function useAllReservations(date) {
  const query = date ? `date=${date}` : "";

  return useQuery({
    queryKey: ["allReservations", date],
    queryFn: () => getAllReservations(query),
  });
}
