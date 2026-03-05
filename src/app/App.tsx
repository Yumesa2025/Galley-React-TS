import { css, cva } from "styled-system/css";
import { PokemonGallery } from "../features/pokemon/PokemonGallery";
import { useUiStore } from "../store/uiStore";
import { PokemonFavorites } from "../features/pokemon/PokemonGallery";

const appStyle = css({
  padding: "40px",
  backgroundColor: "#474747ff",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  textAlign: "center",
});

const titleStyle = css({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "30px",
  color: "#333",
  backgroundColor: "#fff",
});

const tabStyle = css({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "30px"
});

const buttonStyleRecipe = cva({
  base: {
    padding: "10px 20px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    state: {
      active: {
        backgroundColor: "#007AFF", 
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 122, 255, 0.3)", 
      },
      inactive: {
        backgroundColor: "#E5E5EA",
        color: "#8E8E93",
        _hover: {
          backgroundColor: "#D1D1D6",
        }
      }
    }
  },
  defaultVariants: {
    state: "inactive",
  }
});
  
export default function App(){

  const {activeTab, setActiveTab} = useUiStore();

  return(
    <div className={appStyle}>

      <h1 className={titleStyle}>카드 갤러리</h1>

      <div className={tabStyle}>

        <button className=
        {buttonStyleRecipe({state: activeTab === "current" ? "active" : "inactive"})}
        onClick={() => setActiveTab("current")}> 현재탭 </button>

        <button className=
        {buttonStyleRecipe({state: activeTab === "favorites" ? "active" : "inactive"})}
        onClick={() => setActiveTab("favorites")}> 찜목록탭 </button>

        <button className=
        {buttonStyleRecipe({state: activeTab === "search" ? "active" : "inactive"})}
        onClick={() => setActiveTab("search")}> 검색탭</button>
      </div>

      {activeTab === "current" && <PokemonGallery />}
      {activeTab === "favorites" && <div><PokemonFavorites /></div>}
      {activeTab === "search" && <div>검색만들긴 해야하는데...</div>} 

  </div>
  );
}