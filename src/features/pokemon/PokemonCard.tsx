import { css, cva } from "styled-system/css";
import { useFavoritesStore } from "../../store/favoritesStore";
import type { CardItem } from "../../types";


// css
const cardStyle =css({
  border: "1px solid #ccc",
  padding: "25px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "300px",
  justifyContent: "space-between",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  backgroundColor: "#fff",
});

const nameStyle = css({
  fontSize: "1.5rem",
  textTransform: "capitalize",
});

const numberStyle = css({
  fontSize: "1rem",
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
      favorited: {
        backgroundColor: "#007AFF", 
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 122, 255, 0.3)", 
      },
      unFavorited: {
        backgroundColor: "#E5E5EA",
        color: "#8E8E93",
        _hover: {
          backgroundColor: "#D1D1D6",
        }
      }
    }
  },
  defaultVariants: {
    state: "unFavorited",
  }
});

//"https://pokeapi.co/api/v2/pokemon/1/"
function getIdFromUrl(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

//찜하기 버튼 제작
export function FavoirtesButton({ name, url }: CardItem){
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((p) => p.name === name);

  return (
    <button onClick={() => toggleFavorite({ name, url })} 
    className={buttonStyleRecipe({state: isFavorite ? "favorited" : "unFavorited"})} >
    {isFavorite ? "취소하기" : "찜하기"}
  </button>
  );
}

//포켄몬 이미지
export function PokemonImage({ name, url }: CardItem){
  const id = getIdFromUrl(url);
  return (
    <img 
    alt={name}
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    loading="lazy"
    className={css({width: "100%", height: "auto", maxWidth: "150px"})}
    />
  );
}

//포켄몬 카드
export function PokemonCard({ name, url }: CardItem){
  const id = getIdFromUrl(url);
 
  return (
    <div className={cardStyle}>

      <FavoirtesButton name={name} url={url} />

       <div className={nameStyle}>{name}</div>
       <div className={numberStyle}>Num.{id}</div>

       <PokemonImage name={name} url={url} />
    </div>
  );
}