import { atom } from "recoil";

export const PokemonDataState = atom({
  key: "pokemonData",
  default: [],
});

export const SearchInputState = atom({
  key: "searchInput",
  default: "",
});
