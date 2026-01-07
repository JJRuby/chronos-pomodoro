import { useEffect, useReducer } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    console.log(e.data);
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Worker Terminado por falta de ActiveTask");
      worker.terminate();
    }
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
