export interface iPokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  species: iSpecies;
  stats: iStats[];
  types: iTypes[];
  moves: iMoves[];
}

export interface iStats {
  base_stat: number;
  effort: number;
  stat: iStat;
}

export interface iStat {
  name: string;
  url: string;
}

export interface iTypes {
  slot: number;
  type: iType;
}

export interface iType {
  name: string;
  url: string;
}

export interface iSpecies {
  name: string;
  url: string;
}

export interface iMoves {
  move: iMove;
}

export interface iMove {
  name: string;
  url: string;
}

export interface iTypeColor {
  type: string;
  color: string;
}

export interface iSpeciesResponse {
  evolution_chain: iEvolutionChain;
  evolves_from_species: iEvolvesFromSpecies;
  shape: iShape;
  varieties: iVariety[];
}

export interface iEvolutionChain {
  url: string;
}

export interface iEvolvesFromSpecies {
  name: string;
  url: string;
}

export interface iShape {
  name: string;
  url: string;
}

export interface iVariety {
  is_default: boolean;
  pokemon: iPokemonVariety;
}

export interface iPokemonVariety {
  name: string;
  url: string;
}

export interface iEvolutionResponse {
  chain: iChainEvolution;
  id: number;
}

export interface iChainEvolution {
  evolves_to: iEvolvesTo[];
  is_baby: boolean;
  species: iSpecies;
}

export interface iEvolvesTo {
  evolves_to: iEvolvesTo[];
  is_baby: boolean;
  species: iSpecies;
}
