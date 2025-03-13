import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_container}>
          <img src="" alt="" />
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
    </>
  );
}
