import Content from "@/components/content/Content"
import type { PokemonURL } from "@/types/types"
import { use } from "react"


async function getPokemonURL() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000", { next: { revalidate: 3600 } });
  const data = await res.json();

  return data.results
}


export default function Home() {
  const pokemonURL: PokemonURL[] = use(getPokemonURL())

  return (
    <Content pokemonURL={pokemonURL} />
  );
}
