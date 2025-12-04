import { Container } from "./components/Container";
import { Menu } from "./components/Menu/Index";
import { Logo } from "./components/Logo/Index";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
