'use client'

import styles from "@/components/sidepanel/SidePanel.module.css"
import { Search } from "@/components/search/Search"
import { Filter } from "@/components/filter/Filter"
import { PokemonURL } from "@/types/types"

interface Props {
  pokemonURL: PokemonURL[]
}

export const SidePanel = ({ pokemonURL }: Props) => {
    return (
      <div className={styles.side_panel}>
          <div className={styles.filters}>
            <a className={styles.logo} href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
            <Search pokemonURL={pokemonURL}/>
            <div className={styles.divider} />
            <Filter type="types" />
            <div className={styles.divider} />
            <a className={styles.credits} href="https://github.com/PedroHAlvesN" target="_black">
            <span className={styles.credits}>
              Designed and programed by Pedro
            </span>
          </a>
          </div>
      </div>
    )
}