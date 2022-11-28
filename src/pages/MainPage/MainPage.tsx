import { FC } from "react";
import Desk from "./components/Desk/Desk";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ToolsBar from "./components/ToolsBar/ToolsBar";
import * as S from "./styles";

const MainPage: FC = () => {
  return (
    <S.Container>
      <Sidebar />
      <ToolsBar />
      <S.Content>
        <Header />
        <Desk />
      </S.Content>
    </S.Container>
  );
};

export default MainPage;
