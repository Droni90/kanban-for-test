import {memo, useRef, FC} from 'react'
import { useDrag, useDrop} from 'react-dnd';
import * as S from './styles'

interface TaskItemProps {
    text: string;
    time: string;
    timeColor?: string;
    taskColor?: string;
    isCompleted?: boolean;
    currentColumn: string;
    index: number;
    setTargets: (drugIndex: number, targetIndex: number, targetGroup: string, targetItemId: string) => void;
    id: string;
    onMoveCard?: (itemId: string, targetItemId: string, currentColumn: string, targetColumn: string, targetIndex: number, drugIndex: number) => void;
}
const TaskItem: FC<TaskItemProps> = memo((props) => {
    const { text, time, timeColor, taskColor, isCompleted, currentColumn, index, id, setTargets, onMoveCard} = props

    const ref = useRef<any>(null);

    const [{ opacity }, drag] = useDrag(
        () => ({
          type: "task",
          item: { index, id},
          end: (item, monitor) => {
            const dropResult: {targetColumn: string, targetIndex: number, drugIndex: number, targetItemId: string} = monitor.getDropResult() as {targetColumn: string, targetIndex: number, drugIndex: number, targetItemId: string} 
            if(dropResult){
                onMoveCard?.(id, dropResult.targetItemId, currentColumn, dropResult.targetColumn, dropResult.targetIndex, index)
            }
          },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
          }),
        }),
        []
      )

      const [, drop] = useDrop(() => ({
        accept: "task",
        hover(item: any, monitor) {
            setTargets(item.index, index, currentColumn, id)
          }
      }))

      drag(drop(ref));


    return(
    <S.TaskItemComponent ref={ref} color={taskColor} isCompleted={isCompleted} opacity={opacity}>
        <S.Text isCompleted={isCompleted}>{text}</S.Text>
        <S.Time color={timeColor} isCompleted={isCompleted}>{time}</S.Time>
    </S.TaskItemComponent>)
})

export default TaskItem;