import { css } from "styled-system/css";
import { usePokemonList } from "./hooks";
import { PokemonCard } from "./PokemonCard";

export function PokemonGallery(){
  const { data, isLoading, isError} =usePokemonList();

  const myCards = data?.results.map((pokemon) =>{
    return(
      <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
    );
  });

  if (isLoading) return <div className={css({ })}>로딩중...</div>;
  if (isError) return <div className={css({ })}>에러 </div>;

    return (
    <div>
      {myCards} 
    </div>
    );
}

export function PokemonFavorites() {
  return (
    <div className={css({ padding: "20px" })}>
      <h2>내 찜목록</h2>
    </div>
  );
}