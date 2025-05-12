'use client'

import { CardTable } from "@/components/cardtable/CardTable"
import { SidePanel } from "@/components/sidepanel/SidePanel"
import styles from "@/components/content/Content.module.css"
import { PokemonDetails, PokemonURL } from "@/types/types"
import { useEffect, useState } from "react"

interface Props {
    pokemonURL: PokemonURL[]
}

export default function Content({ pokemonURL }: Props) {
    const [ pokemonDetails, setPokemonDetails ] = useState<PokemonDetails[]>([])

    useEffect(() => {
        console.log(pokemonDetails)
    })


    return (
        <div className={styles.content}>
            <SidePanel pokemonURL={pokemonURL} />
            <CardTable
                pokemonURL={pokemonURL}
                pokemonDetails={pokemonDetails}
                setPokemonDetails={setPokemonDetails}
            />
        </div>
    )
}