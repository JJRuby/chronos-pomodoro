import { Container } from "./components/Container";
import { Menu } from "./components/Menu/Index";
import { Logo } from "./components/Logo/Index";

import "./styles/theme.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown/Index";
import { DefautInput } from "./components/DefautInput";

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
            <DefautInput id="meuInput" type="text" labelText="task" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
