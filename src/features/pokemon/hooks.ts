import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../api/pokemon";

export function usePokemonList() {
  return useInfiniteQuery({
    queryKey: ["pokemon"],

    queryFn: ({ pageParam }) => fetchPokemonList(20, pageParam),
    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length * 20;
    },
  });
}


