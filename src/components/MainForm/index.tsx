import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/inde";
import { DefautButton } from "../DefautButton";
import { DefautInput } from "../DefautInput";
import type React from "react";
import { useRef } from "react";
import type { TaskModel } from "../../Models/TaskModels";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../Utils/GetNextCycle";
import { getNextCycleType } from "../../Utils/GetNextCycleType";
import { formatSecondsToMinutes } from "../../Utils/FormatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o Nome da Tarefa");
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    const secondsRemaning = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaning, //conferir
        formattedSecondsRemaning: formatSecondsToMinutes(secondsRemaning),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefautInput
          id="meuInput"
          type="text"
          labelText="task"
          placeholder="Digite Algo"
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>O proximo intervalo é de 25min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        <DefautButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
