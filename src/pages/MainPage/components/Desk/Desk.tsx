import { memo, FC, useState, useCallback } from "react";
import TasksStatus from "./components/TasksStatus/TasksStatus";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg";
import * as S from "./styles";
import { DndProvider } from "react-dnd/dist/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import produce from "immer";

export interface Task {
  id: string;
  text: string;
  time: string;
  colorTask?: string;
  colorTime?: string;
}

interface Tasks {
  [key: string]: Task[];
}

const Desk: FC = memo(() => {
  const [tasks, setTasks] = useState<Tasks>({
    "New Task": [
      {
        id: "1",
        text: "Check email",
        time: "0:20h",
        colorTask: "#ABE9CE",
        colorTime: "#435E52",
      },
      {
        id: "2",
        text: "Compare PPC agencies and make a report for Steven",
        time: "3:00h",
        colorTask: "#D8DCFF",
        colorTime: "#404784",
      },
      {
        id: "3",
        text: "Meeting with Amanda (PR department)",
        time: "0:30h",
        colorTask: "#ABE9CE",
        colorTime: "#435E52",
      },
      {
        id: "4",
        text: 'Get Patrick"s approval for homepage new design',
        time: "0:20h",
        colorTask: "#D8DCFF",
        colorTime: "#404784",
      },
    ],
    Scheduled: [
      {
        id: "5",
        text: "Check email",
        time: "0:50h",
        colorTask: "#FFDFBA",
        colorTime: "#662E1E",
      },
      {
        id: "6",
        text: 'Write a blogpost "7 best strategies for SEO in 2020"',
        time: "5:00h",
        colorTask: "#FEC6B7",
        colorTime: "#662E1E",
      },
      {
        id: "7",
        text: "New Ad copies for Manamaja",
        time: "2:00h",
        colorTask: "#D9E6A2",
        colorTime: "#4A4D3A",
      },
    ],
    "In progress": [
      {
        id: "8",
        text: "Check email",
        time: "0:10h",
        colorTask: "#FFDFBA",
        colorTime: "#662E1E",
      },
      {
        id: "9",
        text: "Record a video comment about last weeks analytics report",
        time: "0:20h",
        colorTask: "#F2BAE1",
        colorTime: "#8E4778",
      },
      {
        id: "10",
        text: "Process all resumes for Content Marketer position",
        time: "1:00h",
        colorTask: "#FFDFBA",
        colorTime: "#662E1E",
      },
    ],
    Completed: [
      { id: "11", text: "Check email", time: "0:40h" },
      { id: "12", text: "Weekly planning session", time: "0:45h" },
      {
        id: "13",
        text: "Create 5+ target audiences in Facebook for Samsung ...",
        time: "2:30h",
      },
      {
        id: "14",
        text: "Check FB Banner Design and give feedback",
        time: "0:20h",
      },
    ],
  });

  const moveCard = useCallback(
    (
      itemId: string,
      targetItemId: string,
      currentColumn: string,
      targetColumn: string,
      targetIndex: number
    ) => {
      setTasks(
        produce((prev) => {
          const dragingTask: Task = prev[currentColumn].find(
            (i) => i.id === itemId
          )!;
          let prevItem;

          if (targetIndex === null || !prev[targetColumn].length) {
            prev[currentColumn] = prev[currentColumn].filter(
              (i) => i.id !== itemId
            );
            prev[targetColumn].push(dragingTask);
            return;
          }

          const currentIdx = prev[currentColumn].findIndex(
            (i) => i.id === itemId
          );
          const targetIndx = prev[targetColumn].findIndex(
            (i) => i.id === targetItemId
          );

          const targetTask = prev[targetColumn].find(
            (i) => i.id === targetItemId
          );
          if (currentColumn === targetColumn) {
            prevItem = prev[currentColumn].splice(targetIndx, 1, dragingTask);
            prev[currentColumn].splice(currentIdx, 1, prevItem[0]);
          } else {
            if (targetTask) {
              prevItem = prev[currentColumn].splice(currentIdx, 1, targetTask);
            } else {
              prevItem = prev[currentColumn].splice(currentIdx, 1);
            }
            prev[targetColumn].splice(targetIndx, 1, prevItem[0]);
          }
        })
      );
    },
    []
  );

  return (
    <S.DeskComponent>
      <DndProvider backend={HTML5Backend}>
        {Object.keys(tasks).map((task: string) => {
          return (
            <TasksStatus
              key={task}
              name={task}
              tasks={tasks[task]}
              moveCard={moveCard}
            />
          );
        })}
      </DndProvider>

      <S.CreateStatusHeader>
        <PlusIcon fill="#8C939F" />
        <S.Text>Create status</S.Text>
      </S.CreateStatusHeader>
    </S.DeskComponent>
  );
});

export default Desk;
