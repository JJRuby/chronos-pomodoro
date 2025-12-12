import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown/Index";
import { MainForm } from "../../components/MainForm";

import { MainTemplate } from "../../Template/MainTemplate/Index";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
