import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonInfo = (id_name: number | string) =>
  axios
    .get(baseURL + id_name)
    .then((response) => response.data)
    .catch((err) => err);
