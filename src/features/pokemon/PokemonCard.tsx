import { css } from "styled-system/css";
import { useFavoritesStore } from "../../store/favoritesStore";
import type { CardItem } from "../../types";


//"https://pokeapi.co/api/v2/pokemon/1/"
function getIdFromUrl(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

export function PokemonCard({ name, url }: CardItem){
  const id = getIdFromUrl(url);
  //찜하기 버튼 제작 

  return (
    <div className={css({ })}>
       <div className={css({ })}>{name}</div>
       <div className={css({ })}>NUM.{id}</div>
       <img 
       alt={name}
       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
       className={css({width: "100px%", height: "100px",})}
       />
    </div>
  );
}