import { getNextCycle } from "../../Utils/GetNextCycle";
import styles from "./Styles.module.css";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import { getNextCycleType } from "../../Utils/GetNextCycleType";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "Foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycledots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycledot} ${styles[nextCycleType]}`}
              aria-label={`indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
