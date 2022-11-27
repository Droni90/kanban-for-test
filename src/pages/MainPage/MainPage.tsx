import { FC } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ToolsBar from "./components/ToolsBar/ToolsBar";
import { Container } from "./styles";

const MainPage: FC = () => {

    return (
        <Container>
            <Sidebar />
            <ToolsBar />
            <Header />
        </Container>
    )
}

export default MainPage 