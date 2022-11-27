import {memo, FC} from 'react'
import { Task } from '../../Desk';
import TaskItem from '../TaskItem/TaskItem';
import Title from '../Titile/Title';
import * as S from './styles'

interface TasksStatusProps {
    tasks: Task[];
    name: string
}
const TasksStatus: FC<TasksStatusProps> = memo((props) => {
    const {tasks, name} = props
    return(
    <S.TasksStatusComponent>
        <Title name={name} count={tasks.length} />
        <S.MarginTop />
        {tasks?.length && tasks.map(task => {
            return <TaskItem 
            key={task.text + task.time}  
            text={task.text} 
            time={task.time} 
            taskColor={task.colorTask} 
            timeColor={task.colorTime}  
            isCompleted={name === 'Completed'}
        />
        })}
    </S.TasksStatusComponent>)
})

export default TasksStatus;