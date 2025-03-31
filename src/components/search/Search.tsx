import styles from "@/components/search/Search.module.css"
import { PokemonURL } from "@/types/types"
import { ChangeEvent, useEffect, useState } from "react"

interface Props {
    pokemonURL: PokemonURL[]
}

export const Search = ({ pokemonURL }: Props) => {
    const [ searching, setSearching ] = useState<boolean>(false)
    const [ searchResults, setSearchResults ] = useState<(PokemonURL | undefined)[]>([])

    function getResults(event: ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value

        if(inputValue === "") {
            setSearching(false)
            setSearchResults([])
            return
        }

        const results = pokemonURL.filter(pokemon => {
            if(pokemon.name.toLowerCase().includes(inputValue.toLowerCase())) return pokemon
        })

        if(results.length === 0 || results === undefined) {
            setSearching(false)
            return
        }

        setSearchResults(results)
        setSearching(true)
    }

    return (
        <div className={styles.search_container}>
            <input
                type="text"
                className={
                    searching && searchResults
                    ? [styles.input, styles.searching].join(" ")
                    : styles.input
                }
                placeholder="Search by name"
                onChange={getResults}
                onBlur={() => setSearching(false)}
                onFocus={() => searchResults.length > 0 && setSearching(true)}
            />
            {
                <div className={
                    searching && searchResults
                    ? [styles.result_dropdown, styles.show].join(" ")
                    : styles.result_dropdown
                    
                }>
                    {searchResults.map(result => {
                        return (
                            <p>{result?.name}</p>
                        )
                    })}
                </div>
            }
            
        </div>
        
    )
}