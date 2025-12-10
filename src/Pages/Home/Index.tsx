import type React from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown/Index";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { MainTemplate } from "../../Template/MainTemplate/Index";

export type Homeprops = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: Homeprops) {
  const { state, setState } = props;

  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />
      </Container>
      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
