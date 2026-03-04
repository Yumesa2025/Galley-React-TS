import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../api/pokemon";

export function usePokemonList(limit = 20, offset = 0) {
  return useQuery({

    queryKey: ["pokemon", limit, offset],

    
    queryFn: () => fetchPokemonList(limit, offset),
  });
}


