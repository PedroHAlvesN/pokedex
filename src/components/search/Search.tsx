import styles from "@/components/search/Search.module.css"

export const Search = () => {
    return (
        <input type="text" className={styles.input} placeholder="Search by name" />
    )
}