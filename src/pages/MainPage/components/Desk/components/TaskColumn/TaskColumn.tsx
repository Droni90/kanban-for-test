import { memo, useState, useCallback, FC } from "react";
import { Task } from "../../Desk";
import TaskItem from "../TaskItem/TaskItem";
import Title from "../Titile/Title";
import * as S from "./styles";
import { useDrop } from "react-dnd";

interface TaskColumnProps {
  tasks: Task[];
  name: string;
  moveCard?: (
    itemId: string,
    targetItemId: string,
    currentColumn: string,
    targetColumn: string,
    targetIndex: number,
    dragIndex: number
  ) => void;
}
const TaskColumn: FC<TaskColumnProps> = memo((props) => {
  const { tasks, name, moveCard } = props;
  const [dragIndex, setDragIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);
  const [targetGroup, setTargetGroup] = useState("");
  const [targetItemId, setTargetItemId] = useState("");

  const setTargets = useCallback(
    (
      dragIndex: number,
      targetIndex: number,
      targetGroup: string,
      targetItemId: string
    ) => {
      setDragIndex(dragIndex);
      setTargetIndex(targetIndex);
      setTargetGroup(targetGroup);
      setTargetItemId(targetItemId);
    },
    []
  );

  const [, drop] = useDrop(
    () => ({
      accept: "task",
      drop: () => ({
        targetColumn: targetGroup || name,
        targetIndex,
        dragIndex,
        targetItemId,
      }),
    }),
    [dragIndex, targetIndex, targetGroup, targetItemId]
  );

  const [, drop2] = useDrop(
    () => ({
      accept: "task",
      hover: () => {
        if (targetIndex) {
          setTargetIndex(null);
        }
      },
    }),
    [dragIndex, targetIndex, targetGroup, targetItemId]
  );

  return (
    <S.TaskColumnComponent ref={drop}>
      <Title name={name} count={tasks.length} />
      <S.MarginTop />
      <div>
        {tasks?.length
          ? tasks.map((task, index) => {
              return (
                <TaskItem
                  key={task.id}
                  text={task.text}
                  time={task.time}
                  taskColor={task.colorTask}
                  timeColor={task.colorTime}
                  currentColumn={name}
                  isCompleted={name === "Completed"}
                  onMoveCard={moveCard}
                  index={index}
                  id={task.id}
                  setTargets={setTargets}
                />
              );
            })
          : null}
      </div>
      <S.ClearTargetTrigger ref={drop2} />
    </S.TaskColumnComponent>
  );
});

export default TaskColumn;
