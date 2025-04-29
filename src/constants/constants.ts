import type { ActionsType, PokemonType, PokemonTypeColor } from "@/types/types"

export const actions: ActionsType[] = [
    {
        name: "search",
        icon: "/search.png",
        active: true
    },
    {
        name: "filter",
        icon: "/filter.png",
        active: false
    }
]

export const pokemonTypes: string[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];

export const pokemonTypesComplete: Record<string, PokemonTypeColor> = {
    "fire": { color: "#F08030" },
    "water": { color: "#6890F0" },
    "grass": { color: "#78C850" },
    "electric": { color: "#F8D030" },
    "poison": { color: "#A040A0" },
    "dragon": { color: "#7038F8" },
    "psychic": { color: "#F85888" },
    "normal": { color: "#A8A878" },
    "ice": { color: "#98D8D8" },
    "fighting": { color: "#C03028" },
    "ghost": { color: "#705898" },
    "steel": { color: "#B8B8D0" },
    "bug": { color: "#A8B820" },
    "ground": { color: "#E0C068" },
    "flying": { color: "#A890F0" },
    "fairy": { color: "#EE99AC" },
    "rock": { color: "#B8A038" },
    "dark": { color: "#705848" }
}

export const possibleCombinations: Record<string, string[]> =
    {
        normal: ["flying", "psychic", "ghost", "steel"],
        fire: ["flying", "ground", "fighting", "ghost", "bug", "dragon", "rock", "steel"],
        water: ["ground", "flying", "rock", "ghost", "dragon", "steel", "ice", "fighting", "bug", "fairy"],
        grass: ["poison", "ground", "bug", "flying", "psychic", "dragon", "fairy"],
        electric: ["steel", "bug", "flying", "ghost", "ground", "dragon", "normal"],
        ice: ["water", "ground", "flying", "ghost", "fairy", "rock", "steel"],
        fighting: ["flying", "rock", "psychic", "dark", "ghost", "steel", "fairy"],
        poison: ["bug", "ground", "flying", "ghost", "rock", "fairy"],
        ground: ["flying", "dragon", "steel", "ghost"],
        flying: ["psychic", "dragon", "ghost"],
        psychic: ["ghost", "fairy"],
        bug: ["flying", "ground", "rock", "ghost", "dark", "grass", "steel"],
        rock: ["ground", "flying", "ghost", "steel"],
        ghost: ["dark", "dragon", "fairy"],
        dragon: ["steel", "fairy"],
        dark: ["ice", "fairy", "flying", "steel"],
        steel: ["fairy"],
        fairy: []
    }

export const weaknesses: Record<string, string[]> =
    {
        normal: ["fighting"],
        fire: ["water", "ground", "rock"],
        water: ["electric", "grass"],
        grass: ["fire", "ice", "poison", "flying", "bug"],
        electric: ["ground"],
        ice: ["fire", "fighting", "rock", "steel"],
        fighting: ["flying", "psychic", "fairy"],
        poison: ["ground", "psychic"],
        ground: ["water", "grass", "ice"],
        flying: ["electric", "ice", "rock"],
        psychic: ["bug", "ghost", "dark"],
        bug: ["fire", "flying", "rock"],
        rock: ["water", "grass", "fighting", "ground", "steel"],
        ghost: ["ghost", "dark"],
        dragon: ["ice", "dragon", "fairy"],
        dark: ["fighting", "bug", "fairy"],
        steel: ["fire", "fighting", "ground"],
        fairy: ["poison", "steel"]
    }
      
  