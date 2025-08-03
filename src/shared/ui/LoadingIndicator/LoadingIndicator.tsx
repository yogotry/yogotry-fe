import styles from "./LoadingIndicator.module.scss"

export function LoadingIndicator() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}/>
    </div>
  )
}