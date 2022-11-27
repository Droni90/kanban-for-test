import {memo, FC} from 'react'
import { Task } from '../../Desk';
import TaskItem from '../TaskItem/TaskItem';
import Title from '../Titile/Title';
import * as S from './styles';
import { useDrop } from 'react-dnd';

interface TasksStatusProps {
    tasks: Task[];
    name: string;
    moveCard?: (currentItem: Task, currentColumn: string, targetColumn: string) => void
}
const TasksStatus: FC<TasksStatusProps> = memo((props) => {
    const {tasks, name, moveCard} = props

    const [, drop] = useDrop(() => ({
        accept: "Our first type",
        drop: () => ({targetColumn: name})
      }))

    
    return(
    <S.TasksStatusComponent ref={drop}>
        <Title name={name} count={tasks.length} />
        <S.MarginTop />
        <div ref={drop}>

            {tasks?.length && tasks.map(task => {
                return <TaskItem 
                key={task.text + task.time}  
                text={task.text} 
                time={task.time} 
                taskColor={task.colorTask} 
                timeColor={task.colorTime}  
                currentColumn={name}
                isCompleted={name === 'Completed'}
                onMoveCard = {moveCard}
            />
            })}
        </div>
    </S.TasksStatusComponent>)
})

export default TasksStatus;