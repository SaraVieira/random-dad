import styles from "./index.module.css"

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.flag}>🇺🇸</div>
        <div className={styles.logo}>AMERICAN DAD!</div>
        <div className={styles.flag}>🇺🇸</div>
      </div>
      <div className={styles.subtitle}>Random Episode Generator</div>

      <div className={styles.stars}>
        <span className={styles.star}>⭐</span>
        <span className={styles.star}>⭐</span>
        <span className={styles.star}>⭐</span>
        <span className={styles.star}>⭐</span>
        <span className={styles.star}>⭐</span>
      </div>
    </>
  )
}
