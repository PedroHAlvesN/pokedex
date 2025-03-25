import { CardTable } from "@/components/cardtable/CardTable"
import { ActionTab } from "@/components/actiontab/ActionTab"
import type { PokemonAPIResponse, PokemonType } from "@/types/types"
import styles from "@/app/page.module.css"

async function getPokemons(): Promise<PokemonAPIResponse> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  if (!res.ok) throw new Error("Erro ao buscar Pokémons");
  return res.json()
}

export default async function Home() {
  const pokemons = await getPokemons()

  return (
    <div className={styles.content}>
      <ActionTab />
      <CardTable />
    </div>
  );
}
