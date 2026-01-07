import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/inde";
import { DefautButton } from "../DefautButton";
import { DefautInput } from "../DefautInput";
import type React from "react";
import { useRef } from "react";
import type { TaskModel } from "../../Models/TaskModels";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../Utils/GetNextCycle";
import { getNextCycleType } from "../../Utils/GetNextCycleType";
import { TaskActionTypes } from "../../Contexts/TaskContext/TaskActions";
import { Tips } from "../../Tips";

export function MainForm() {
  const { state, dispatch } = useTaskContext();

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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefautButton
            aria-label="Iniciar tarefa"
            title="Iniciar Tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="Este é o botao de iniciar"
          />
        ) : (
          <DefautButton
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
            key="Este é o botao de parar"
          />
        )}
      </div>
    </form>
  );
}
