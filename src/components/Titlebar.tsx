import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { SearchBar } from "../style/SearchBar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import usePokedex from "../pokedex";

export default function Titlebar() {
  const pokemon = usePokedex((state) => state.currentPokemon);
  const setPokemon = usePokedex((state) => state.setPokemon);

  // Pokemon Search Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get Form Data
    const formData = new FormData(e.currentTarget);
    let query = formData.get("poke-search");
    let parsed = parseInt(query as string); // if id is entered

    if (isNaN(parsed)) setPokemon(query as string); // Name Search
    else if (parsed < 1009 && parsed > 0) setPokemon(parsed); // Id Search

    // Clear Form
    e.currentTarget.reset();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: pokemon?.palette[3] || "#ddd" }} elevation={1}>
          <Toolbar>
            <Box sx={{ display: "flex" }}>
              <img src="/logo.png" alt="logo" width="40px" />
              <Typography
                variant="h5"
                sx={{ my: "auto", ml: 1, display: { xs: "none", sm: "block" } }}
              >
                PokéDex
              </Typography>
            </Box>
            <SearchBar>
              <SearchRoundedIcon />

              <form onSubmit={handleSubmit}>
                <InputBase
                  placeholder="Search by id / name"
                  name="poke-search"
                />
              </form>
            </SearchBar>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
}
