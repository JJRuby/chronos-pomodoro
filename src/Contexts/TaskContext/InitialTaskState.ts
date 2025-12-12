import type { TaskStateModel } from "../../Models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemaning: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    LongBreakTime: 15,
  },
};
