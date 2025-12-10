import type { Homeprops } from "../../Pages/Home/Index";
import styles from "./Styles.module.css";

export function CountDown({ state }: Homeprops) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaning}</div>
  );
}
