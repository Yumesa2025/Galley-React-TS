import { http } from "./http";
import type { CardItem } from "../types";

//목록 응답
export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: CardItem[];
};

// 목록 가져오기 
export async function fetchPokemonList(limit = 20, offset = 0) {
  const result = await http.get<PokemonListResponse>("/pokemon", {params: { limit, offset }});
  return result.data;
};
