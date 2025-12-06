import styles from "./Styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycledots}>
        <span className={`${styles.cycledot} ${styles.workTime}`}></span>
        <span className={`${styles.cycledot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycledot} ${styles.workTime}`}></span>
        <span className={`${styles.cycledot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycledot} ${styles.workTime}`}></span>
        <span className={`${styles.cycledot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycledot} ${styles.workTime}`}></span>
        <span className={`${styles.cycledot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
