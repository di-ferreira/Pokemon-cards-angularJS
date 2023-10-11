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
