"use client"

import styles from "@/components/cardtable/CardTable.module.css"
import { PokemonDetails, PokemonURL } from "@/types/types";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { Card } from "../card/Card";

interface Props {
    pokemonURL: PokemonURL[]
}

export const CardTable = ({ pokemonURL }: Props) => {
    const cardTableRef = useRef<HTMLDivElement>(null)
    const [ translate, setTranslate ] = useState<string>("")
    const [ pokemonDetails, setPokemonDetails ] = useState<PokemonDetails[]>([])
    const [ requestStartIndex, setRequestStartIndex ] = useState<number>()

    const requestItems = 24

    function moveCardTable(event: MouseEvent) {
        if(!cardTableRef.current) return

        const scaleLength = 30;

        const stepX = scaleLength / window.innerWidth;
        const translateStepX = stepX * event.clientX;
        const translateX = -(scaleLength / 2) + translateStepX;

        const stepY = scaleLength / cardTableRef.current.offsetHeight;
        const distanceFromTop = cardTableRef.current.getBoundingClientRect().top
        const translateStepY = stepY * (event.clientY - distanceFromTop);
        const translateY = -(scaleLength / 2) + translateStepY;

        setTranslate(`translate(${translateX * -1}px, ${translateY * -1}px)`)
    }

    async function getDetailedPokemons() {
        if(requestStartIndex === undefined || !pokemonURL) return
        const formattedPokemonURL = pokemonURL.slice(requestStartIndex, requestStartIndex + requestItems)
        const detailedPokemons = await Promise.all(
            formattedPokemonURL.map(async (pokemon: { url: string }) => {
                const res = await fetch(pokemon.url);
                return res.json() as Promise<PokemonDetails>;
            })
        );

        setPokemonDetails([...pokemonDetails, ...detailedPokemons])
    }

    useEffect(() => {
        setRequestStartIndex(0)
    }, [pokemonURL])

    useEffect(() => {
        getDetailedPokemons()
    }, [requestStartIndex])

    

    return (
        <div
            className={styles.card_table_container}
            ref={cardTableRef}
            onMouseMove={moveCardTable}
            onMouseLeave={() => setTranslate("translate(0, 0)")}
        >
            <div className={styles.card_table_content} style={{transform: translate}}>
                {
                    pokemonDetails.map(pokemon => {
                        return (
                            <Card pokemonDetails={pokemon}/>
                        )
                    })
                }
            </div>
            <div className={styles.load_more} onClick={() => requestStartIndex != undefined && setRequestStartIndex(requestStartIndex + requestItems)}>
                Load more cards
            </div>
        </div>
    )
}