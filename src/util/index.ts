// Image URL
export function getImageLink(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// Type Tag Colors
export enum PokemonTypeColors {
  normal = "#BCBDAF",
  fire = "#FA5542",
  fighting = "#A75644",
  water = "#55AEFE",
  flying = "#7BA4FF",
  grass = "#8CD851",
  poison = "#AB5DA3",
  electric = "#FEE342",
  ground = "#EFCA56",
  psychic = "#F761B2",
  rock = "#CEBC72",
  ice = "#95F1FE",
  dragon = "#8B76FF",
  bug = "#C3D21F",
  dark = "#8E6956",
  ghost = "#7975D4",
  steel = "#C4C2DA",
  fairy = "#FAADFF",
}
