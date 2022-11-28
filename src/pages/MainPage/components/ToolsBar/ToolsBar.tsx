import React, { memo, useMemo } from "react";
import * as S from "./styles";
import { ToolsBarOption } from "./types";
import { ReactComponent as Roadmap } from "../../../../assets/icons/roadmap.svg";
import { ReactComponent as Schedule } from "../../../../assets/icons/shedule.svg";
import { ReactComponent as Task } from "../../../../assets/icons/task.svg";
import { ReactComponent as Note } from "../../../../assets/icons/note.svg";
import { ReactComponent as File } from "../../../../assets/icons/file.svg";

const ToolsBar = memo(() => {
  const toolsBarOprions: ToolsBarOption[] = useMemo(
    () => [
      {
        value: "Roadmap",
        Svg: Roadmap,
      },
      {
        value: "Schedule",
        Svg: Schedule,
        isActive: true,
      },
      {
        value: "Tasks",
        Svg: Task,
      },
      {
        value: "Notes",
        Svg: Note,
      },
      {
        value: "Files",
        Svg: File,
      },
    ],
    []
  );

  return (
    <S.Wrapper>
      <S.Title>Tools</S.Title>
      {toolsBarOprions.map(({ value, Svg, isActive = false }) => (
        <S.ToolsBarItem key={value} isActive={isActive}>
          {isActive ? <div /> : null}
          <Svg />
          <p>{value}</p>
        </S.ToolsBarItem>
      ))}
    </S.Wrapper>
  );
});

export default ToolsBar;
