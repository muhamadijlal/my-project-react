import { useMutation, useQueryClient } from "@tanstack/react-query";
import { upsertCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => upsertCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully udpated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateCabin, isUpdating };
}
