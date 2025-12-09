import { Container } from "./components/Container";
import { Menu } from "./components/Menu/Index";
import { Logo } from "./components/Logo/Index";

import "./styles/theme.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown/Index";
import { DefautInput } from "./components/DefautInput";
import { Cycles } from "./components/Cycles/inde";
import { DefautButton } from "./components/DefautButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer/Index";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
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
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefautButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
