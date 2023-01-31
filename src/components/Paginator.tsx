import { Box as MuiBox, styled, Pagination } from "@mui/material";
import usePokedex from "../pokedex";

const Box = styled(MuiBox)(({ theme }) => ({
  margin: "auto",
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, "auto"),
  },
}));

export default function Paginator() {
  const pokemon = usePokedex((state) => state.currentPokemon);
  const setPokemon = usePokedex((state) => state.setPokemon);

  return (
    <Box>
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
