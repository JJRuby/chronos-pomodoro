import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import styles from "./Styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaning}</div>
  );
}
