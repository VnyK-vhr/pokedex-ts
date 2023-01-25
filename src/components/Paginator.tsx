import { Box, Pagination } from "@mui/material";
import usePokedex from "../pokedex";

export default function Paginator() {
  const pokemon = usePokedex((state) => state.currentPokemon);
  const setPokemon = usePokedex((state) => state.setPokemon);

  return (
    <Box sx={{ mx: "auto", py: 2, mt: "auto" }}>
      <Pagination
        count={1008}
        boundaryCount={2}
        page={pokemon?.id || 1}
        onChange={(_e, p) => setPokemon(p)}
        color="secondary"
      />
    </Box>
  );
}
