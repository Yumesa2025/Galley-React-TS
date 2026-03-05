import { css } from "styled-system/css";
import { usePokemonList } from "./hooks";
import { PokemonCard } from "./PokemonCard";
import { useFavoritesStore } from "../../store/favoritesStore";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";


const cardsContainerStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "20px",
  padding: "20px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

const favoritesWrapStyle = css({
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  padding: "20px",
  width: "100%",
});

const favoritesTextStyle = css({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "30px",
  color: "#333",
});



export function PokemonGallery(){
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage} = usePokemonList(); 

  const myCards = data?.pages.flatMap((page) => page.results).map((pokemon) =>(
    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
  ));

  const sentinelRef = useIntersectionObserver(fetchNextPage, !!hasNextPage);

  if (isLoading) return <div className={cardsContainerStyle}>로딩중</div>;
  if (isError) return <div className={cardsContainerStyle}>에러 </div>;

    return (
    <div className={cardsContainerStyle}>
      {myCards} 
      <div ref={sentinelRef} style={{ height: "20px", width: "100%" }} /> {/* 투명 감지선 */}
      {isFetchingNextPage && <div>다음 불러오는 중 </div>}
    </div>
    );
}

export function PokemonFavorites() {

  const { favorites } = useFavoritesStore();

  const favoriteCards = favorites.map((pokemon) => (
    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
  ));
  
  return (
    <div className={favoritesWrapStyle}>
      <h2 className={favoritesTextStyle}>내 찜목록({favorites.length}개) </h2>
      <div className={cardsContainerStyle}>
        {favorites.length === 0 ? (<div className={favoritesTextStyle}>찜한 포켓몬이 없습니다.</div>) : (favoriteCards)}
      </div>
      
    </div>
  );
}