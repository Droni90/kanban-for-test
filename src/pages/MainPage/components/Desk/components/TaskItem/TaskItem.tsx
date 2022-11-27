import {memo, FC} from 'react'
import { useDrag } from 'react-dnd';
import { Task } from '../../Desk';
import * as S from './styles'

interface TaskItemProps {
    text: string;
    time: string;
    timeColor?: string;
    taskColor?: string;
    isCompleted?: boolean;
    currentColumn: string;
    onMoveCard?: (currentItem: Task, currentColumn: string, targetColumn: string) => void;
}
const TaskItem: FC<TaskItemProps> = memo((props) => {
    const { text, time, timeColor, taskColor, isCompleted, currentColumn, onMoveCard} = props


    const [{ opacity }, dragRef] = useDrag(
        () => ({
          type: "Our first type",
          item: { text, time, colorTime: timeColor, colorTask: taskColor},
          end: (item, monitor) => {
            const dropResult: {targetColumn: string} = monitor.getDropResult() as {targetColumn: string} 
            if(dropResult){
                onMoveCard?.({text: item.text, time: item.time, colorTask: item.colorTask, colorTime: item.colorTime}, currentColumn, dropResult.targetColumn)
            }

          },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
          })
        }),
        []
      )


    return(
    <S.TaskItemComponent ref={dragRef} color={taskColor} isCompleted={isCompleted} opacity={opacity}>
        <S.Text isCompleted={isCompleted}>{text}</S.Text>
        <S.Time color={timeColor} isCompleted={isCompleted}>{time}</S.Time>
    </S.TaskItemComponent>)
})

export default TaskItem;