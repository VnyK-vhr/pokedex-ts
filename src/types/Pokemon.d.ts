export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stats[];
  types: Types[];
}

interface Types {
  type: {
    name: string;
  };
}
interface Stats {
  base_stat: number;
  stat: { name: string };
}
