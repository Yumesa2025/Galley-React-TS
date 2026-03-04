import { create } from "zustand";

export type Tab = "current" | "favorites" | "search";

interface UiState{activeTab: Tab; setActiveTab: (tab: Tab) => void;}

export const useUiStore = create<UiState>((set) => ({
    activeTab: "current",
    setActiveTab: (tab) => set({ activeTab: tab }),
}));