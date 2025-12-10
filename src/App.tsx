import { Home } from "./Pages/Home/Index";

import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./Models/TaskStateModel";

const initialState: TaskStateModel = {
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

export function App() {
  const [state, setState] = useState(initialState);
  return <Home state={state} setState={setState} />;
}
