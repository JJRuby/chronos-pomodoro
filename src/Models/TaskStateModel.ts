import type { TaskModel } from "./TaskModels";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaning: number;
  formattedSecondsRemaning: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    LongBreakTime: number;
  };
};
