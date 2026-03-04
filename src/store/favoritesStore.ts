import { create } from "zustand";
import type { CardItem } from "../types";

interface FavoritesState{
    favorites: CardItem[];

    toggleFavorite: (id: CardItem) => void;

}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  toggleFavorite: (item) =>
    set((state) => {
      const isAlreadyFavorite = state.favorites.some((p) => p.name === item.name);
      
      return {
        favorites: isAlreadyFavorite 
            ? state.favorites.filter((p) => p.name !== item.name) 
            : [...state.favorites, item], 
      };
    }),
}));