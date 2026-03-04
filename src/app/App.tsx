import { css } from "styled-system/css";
import { PokemonGallery } from "../features/pokemon/PokemonGallery";
import { useUiStore } from "../store/uiStore";
import { PokemonFavorites } from "../features/pokemon/PokemonGallery";


export default function App(){

  const {activeTab, setActiveTab} = useUiStore();
  return(
    <div className={css({  })}>

      <h1 className={css({})}>
        카드 갤러리
        </h1>

      <div className={css({})}>

        <button className={css({})}onClick={() => setActiveTab("current")}>
          현재탭
        </button>

        <button className={css({})} onClick={() => setActiveTab("favorites")}>
          찜목록탭
        </button>

        <button className={css({})} onClick={() => setActiveTab("search")}>
          검색탭
        </button>
      </div>

      {activeTab === "current" && <PokemonGallery />}
      {activeTab === "favorites" && <div><PokemonFavorites /></div>}
      {activeTab === "search" && <div>검색</div>}
  </div>
  );
}