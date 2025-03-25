export interface ActionsType {
    name: string,
    icon: string,
    active: boolean
}

export interface PokemonURL {
    name: string,
    url: string
}

export type PokemonType = {
    type: { name: string };
};

export type PokemonTypeColor = {
  color: string;
};  

export type PokemonDetails = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
  };
  
export interface PokemonAPIResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonURL[];
};