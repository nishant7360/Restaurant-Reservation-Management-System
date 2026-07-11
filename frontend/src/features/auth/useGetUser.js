import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./authApi";

function useGetMe() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return { user, isLoading };
}

export default useGetMe;
