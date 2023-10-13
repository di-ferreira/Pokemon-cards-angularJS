export interface iPokemon {
  num: number;
  hp: number;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  types: string[];
}

export interface iApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: iPokemon[];
}

export interface iTypeColor {
  type: string;
  color: string;
}

export interface iPokemonResponse {
  id: number;
  name: string;
  stats: Stat[];
  types: Type[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}
