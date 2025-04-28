import { CardTable } from "@/components/cardtable/CardTable"
import { SidePanel } from "@/components/sidepanel/SidePanel"
import type { PokemonURL } from "@/types/types"
import styles from "@/app/page.module.css"

export async function getPokemonURL() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000", { next: { revalidate: 3600 } });
  const data = await res.json();

  return data.results
}


export default async function Home() {
  const pokemonURL: PokemonURL[] = await getPokemonURL()

  return (
    <div className={styles.content}>
      <SidePanel pokemonURL={pokemonURL}/>
      <CardTable pokemonURL={pokemonURL} />
    </div>
  );
}
