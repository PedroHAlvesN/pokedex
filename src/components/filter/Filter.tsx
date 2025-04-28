import styles from "@/components/filter/Filter.module.css"
import { pokemonTypes, pokemonTypesComplete } from "@/constants/constants"
import { useState } from "react"

interface Props {
    type: string
}

export const Filter = ({ type = "types" }: Props) => {
    const [ types, setTypes ] = useState<string[]>(pokemonTypes)
    const [ weakness, setWeakness ] = useState<string[]>(pokemonTypes)

    return (
        <div className={styles.filter_container}>
            <div className={styles.types_container}>
                <h3 className={styles.type_title}>Tipos:</h3>
                <div className={styles.types_content}>
                    {
                        types.map(type => {
                            return (
                                <button
                                    className={styles.type_button}
                                    style={{ backgroundColor: pokemonTypesComplete[type].color}}
                                >
                                    {type}
                                </button>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className={styles.types_container}>
                <h3 className={styles.weakness_title}>Fraquezas:</h3>
                <div className={styles.types_content}>
                    {
                        weakness.map(type => {
                            return (
                                <button
                                    className={styles.type_button}
                                    style={{ backgroundColor: pokemonTypesComplete[type].color}}
                                >
                                    {type}
                                </button>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}