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