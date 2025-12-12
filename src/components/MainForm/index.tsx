import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/inde";
import { DefautButton } from "../DefautButton";
import { DefautInput } from "../DefautInput";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefautInput
          id="meuInput"
          type="text"
          labelText="task"
          placeholder="Digite Algo"
        />
      </div>

      <div className="formRow">
        <p>O proximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefautButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
