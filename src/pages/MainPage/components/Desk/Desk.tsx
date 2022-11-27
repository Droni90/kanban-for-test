import {memo, useMemo, FC} from 'react'
import TasksStatus from './components/TasksStatus/TasksStatus'
import {ReactComponent as PlusIcon} from '../../../../assets/icons/plus.svg'
import * as S from './styles'

export interface Task{
    text: string, 
    time: string, 
    colorTask?: string, 
    colorTime?: string
}

interface Tasks {
    [key: string]: Task[]
}



const Desk: FC = memo(() => {
    const tasks: Tasks = useMemo(() => {
        return {
        "New Task" : [
            {text: 'Check email', time: '0:20h', colorTask: '#ABE9CE', colorTime: '#435E52'}, 
            {text: 'Compare PPC agencies and make a report for Steven', time: '3:00h', colorTask: '#D8DCFF', colorTime: '#404784'}, 
            {text: 'Meeting with Amanda (PR department)', time: '0:30h', colorTask: '#ABE9CE', colorTime: '#435E52'}, 
            {text: 'Get Patrick"s approval for homepage new design', time: '0:20h', colorTask: '#D8DCFF', colorTime: '#404784'}],
        "Scheduled" : [
            {text: 'Check email', time: '0:20h', colorTask: '#FFDFBA', colorTime: '#662E1E'}, 
            {text: 'Write a blogpost "7 best strategies for SEO in 2020"', time: '5:00h', colorTask: '#FEC6B7', colorTime: '#662E1E'}, 
            {text: 'New Ad copies for Manamaja', time: '2:00h', colorTask: '#D9E6A2', colorTime: '#4A4D3A'}
        ],
        "In progress" : [
            {text: 'Check email', time: '0:20h', colorTask: '#FFDFBA', colorTime: '#662E1E'}, 
            {text: 'Record a video comment about last weeks analytics report', time: '0:20h', colorTask: '#F2BAE1', colorTime: '#8E4778'}, 
            {text: 'Process all resumes for Content Marketer position', time: '1:00h', colorTask: '#FFDFBA', colorTime: '#662E1E'}
        ],
        "Completed" : [
            {text: 'Check email', time: '0:20h'}, 
            {text: 'Weekly planning session', time: '0:45h'}, 
            {text: 'Create 5+ target audiences in Facebook for Samsung ...', time: '2:30h'}, 
            {text: 'Check FB Banner Design and give feedback', time: '0:20h'},
        ]                
    }}, [])
    return(
    <S.DeskComponent>
        {Object.keys(tasks).map((task: string) => {
           return <TasksStatus key={task} name={task} tasks={tasks[task]} />
        })}
        <S.CreateStatusHeader>
            <PlusIcon fill='#8C939F' />
            <S.Text>Create status</S.Text>
        </S.CreateStatusHeader>
    </S.DeskComponent>)
})

export default Desk;