import axios from "axios";
import { Pokemon } from "../types/Pokemon";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonInfo = (id_name: number | string): Promise<Pokemon> =>
  new Promise((resolve, reject) =>
    axios
      .get(baseURL + id_name)
      .then((response) => resolve(response.data))
      .catch(reject)
  );
