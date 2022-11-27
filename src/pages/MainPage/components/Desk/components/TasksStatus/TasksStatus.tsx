import {memo, useState,  useCallback ,FC} from 'react'
import { Task } from '../../Desk';
import TaskItem from '../TaskItem/TaskItem';
import Title from '../Titile/Title';
import * as S from './styles';
import { useDrop } from 'react-dnd';

interface TasksStatusProps {
    tasks: Task[];
    name: string;
    moveCard?: (itemId: string, targetItemId: string, currentColumn: string, targetColumn: string, targetIndex: number, drugIndex: number) => void
}
const TasksStatus: FC<TasksStatusProps> = memo((props) => {
    const {tasks, name, moveCard} = props
    const [drugIndex, setDrugIndex] = useState(0)
    const [targetIndex, setTargetIndex] = useState<number | null>(null)
    const [targetGroup, setTargetGroup] = useState('')
    const [targetItemId, setTargetItemId] = useState('')

    const setTargets = useCallback((drugIndex: number, targetIndex: number, targetGroup: string, targetItemId: string)=> {
        setDrugIndex(drugIndex)
        setTargetIndex(targetIndex)
        setTargetGroup(targetGroup)
        setTargetItemId(targetItemId)
    }, [])


    const [, drop] = useDrop(() => ({
        accept: "task",
        drop: () => ({targetColumn: targetGroup || name, targetIndex, drugIndex, targetItemId}),
      }), [drugIndex, targetIndex, targetGroup, targetItemId])

      const [, drop2] = useDrop(() => ({
        accept: "task",
        hover: () =>{if(targetIndex){ setTargetIndex(null) }}
      }), [drugIndex, targetIndex, targetGroup, targetItemId])


    
    return(
    <S.TasksStatusComponent ref={drop}>
        <Title name={name} count={tasks.length} />
        <S.MarginTop />
        <div>
            {tasks?.length ? tasks.map((task, index) => {
                return <TaskItem 
                key={task.id}  
                text={task.text} 
                time={task.time} 
                taskColor={task.colorTask} 
                timeColor={task.colorTime}  
                currentColumn={name}
                isCompleted={name === 'Completed'}
                onMoveCard = {moveCard}
                index={index}
                id={task.id}
                setTargets={setTargets}
            />
            }) : null}
        </div>
        <S.ClearTargetTrigger ref={drop2}  />
    </S.TasksStatusComponent>)
})

export default TasksStatus;