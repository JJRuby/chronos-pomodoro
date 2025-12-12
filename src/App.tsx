import { Home } from "./Pages/Home/Index";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./Contexts/TaskContext/TaskContextProvider";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
