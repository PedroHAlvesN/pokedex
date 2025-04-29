import { PokemonDetails } from "@/types/types"
import styles from "@/components/card/Card.module.css"
import { pokemonTypesComplete } from "@/constants/constants"

interface Props {
    pokemonDetails: PokemonDetails
}

export const Card = ({ pokemonDetails }: Props) => {
    return (
        <div className={styles.card_container}>
            <img draggable={false} className={styles.mold} src="/mold.png"/>
            <div className={styles.sprite_container}>
                <img className={styles.sprite} src={pokemonDetails.sprites.front_default} alt={`${pokemonDetails.name} sprite`} />
            </div>
            <div className={styles.text_container}>
                <span className={styles.pokemon_number}>
                    Nº
                    {
                        
                        pokemonDetails.id < 10
                        ? ` 000${pokemonDetails.id}`
                        : pokemonDetails.id < 100
                        ? ` 00${pokemonDetails.id}`
                        : ` ${pokemonDetails.id}`
                    }
                </span>
                <div className={styles.text_details}>
                    <h2 className={styles.pokemon_name}>{pokemonDetails.name}</h2>
                    <div className={styles.types}>
                        {
                            pokemonDetails.types.map(types => {
                                return (
                                    <p className={styles.type} style={{ backgroundColor: pokemonTypesComplete[types.type.name].color }}>
                                        {types.type.name}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}