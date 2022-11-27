import {memo, FC} from 'react'
import * as S from './styles'

interface TaskItemProps {
    text: string;
    time: string;
    timeColor?: string;
    taskColor?: string;
    isCompleted?: boolean
}
const TaskItem: FC<TaskItemProps> = memo((props) => {
    const {text, time, timeColor, taskColor, isCompleted} = props
    return(
    <S.TaskItemComponent color={taskColor} isCompleted={isCompleted}>
        <S.Text isCompleted={isCompleted}>{text}</S.Text>
        <S.Time color={timeColor} isCompleted={isCompleted}>{time}</S.Time>
    </S.TaskItemComponent>)
})

export default TaskItem;