import { useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";

import usePokedex from "./pokedex";
import { Paginator, PokemonInfo, Titlebar } from "./components";
import { Toaster } from "react-hot-toast";

export default function App() {
  const pokemon = usePokedex((state) => state.currentPokemon); // current page pokemon
  const setPokemon = usePokedex((state) => state.setPokemon); // update pokemon on page change
  // palette has 6 hexes extracted from pokemon image

  // get page 1 pokemon
  useEffect(() => {
    if (!pokemon) setPokemon(1);
  }, [pokemon, setPokemon]);

  // update bgcolor on pokemon change
  useEffect(() => {
    document.body.style.backgroundColor = pokemon?.palette[3] || "#ddd";
  }, [pokemon]);

  return (
    <>
      <Toaster />
      <Titlebar />
      <Container
        maxWidth="xl"
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!pokemon && <CircularProgress sx={{ m: "auto" }} />}

        <PokemonInfo />
        <Paginator />
      </Container>
    </>
  );
}
