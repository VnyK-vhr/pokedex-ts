import { Box, Chip, Grid, Typography } from "@mui/material";
import usePokedex from "../pokedex";

import { PokeContainer } from "../style/PokeContainer";
import { getImageLink, PokemonTypeColors } from "../util";

export default function PokemonInfo() {
  const pokemon = usePokedex((state) => state.currentPokemon);

  return pokemon ? (
    <PokeContainer>
      <img
        className="poke_img"
        src={getImageLink(pokemon.id)}
        alt="pokemon_img"
      />
      <Box className="poke_info">
        <Box className="title_box">
          <Typography
            variant="h2"
            color={pokemon.palette[2]}
            sx={{ lineHeight: 1.2, mt: "auto" }}
          >
            <b>#{pokemon.id}</b>
          </Typography>
          <Typography
            variant="h1"
            color={pokemon.palette[2]}
            noWrap
            sx={{ lineHeight: 1, ml: 1 }}
          >
            <b>{pokemon.name}</b>
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing={1}
          rowSpacing={1}
          justifyContent="flex-end"
          sx={{ p: 1 }}
        >
          {pokemon.types.length &&
            pokemon.types.map((type) => (
              <Grid item key={type.type.name}>
                <Chip
                  label={<b>{type.type.name}</b>}
                  sx={{
                    bgcolor:
                      PokemonTypeColors[
                        type.type.name as keyof typeof PokemonTypeColors
                      ],
                  }}
                />
              </Grid>
            ))}
        </Grid>
        <Box className="poke_stats">
          <Box className="other">
            <Typography variant="h6" color={pokemon.palette[2]}>
              Height: {(pokemon.height / 10).toFixed(1)}m
            </Typography>
            <Typography variant="h6" color={pokemon.palette[2]}>
              Weight: {(pokemon.weight / 10).toFixed(1)}kg
            </Typography>
          </Box>
          <Box className="stats">
            <Typography variant="h3" color={pokemon.palette[4]}>
              <b>Base Stats: </b>
            </Typography>
            <Grid container columnSpacing={1} rowSpacing={1}>
              {pokemon.stats.length &&
                pokemon.stats.map((stat) => (
                  <Grid item key={stat.stat.name}>
                    <Chip
                      label={
                        <Typography variant="subtitle2">
                          {stat.stat.name}: {stat.base_stat}
                        </Typography>
                      }
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </PokeContainer>
  ) : (
    <></>
  );
}
