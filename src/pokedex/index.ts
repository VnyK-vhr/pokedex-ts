import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import Extractor from "node-vibrant";
import { Palette } from "node-vibrant/lib/color";

import { getPokemonInfo } from "../api";
import { Pokemon } from "../types/Pokemon";
import { getImageLink } from "../util";

interface Colors {
  palette: string[];
}
interface Pokedex {
  pokemon: (Pokemon & Colors)[];
  currentPokemon: (Pokemon & Colors) | null;
  setPokemon: (p: number | string) => void;
}

// Zustand is used to store already fetched pokemon info
const usePokedex = create<Pokedex>((set, get) => ({
  pokemon: [],
  currentPokemon: null,

  setPokemon(id) {
    // Find in local based on id/name
    let found_pokemon = get().pokemon.find(
      (p) => (typeof id === "string" ? p.name : p.id) === id
    );
    // Call PokeAPI if not found
    if (!found_pokemon)
      getPokemonInfo(id)
        .then((pokemon) => {
          // Extract colors from pokemon image
          Extractor.from(getImageLink(pokemon.id))
            .getSwatches()
            .then((swatches) =>
              set((current) => ({
                pokemon: [
                  ...current.pokemon,
                  { ...pokemon, palette: getHex(swatches) },
                ].sort((a, b) => a.id - b.id),
                currentPokemon: { ...pokemon, palette: getHex(swatches) },
              }))
            )
            .catch(console.log);
        })
        .catch(console.log);
    // Update current pokemon
    else set({ currentPokemon: found_pokemon });
  },
}));

function getHex(swatches: Palette): string[] {
  let results: string[] = [];
  for (let swatch in swatches) {
    let hex = swatches?.[swatch]?.getHex();
    if (hex) results.push(hex);
  }
  return results;
}

export default usePokedex;
if (process.env.NODE_ENV === "development")
  mountStoreDevtool("pokedex", usePokedex);
