import  {memo, FC} from 'react'
import {ReactComponent as NotificationIcon} from '../../../../../../assets/icons/notification.svg'
import { NotificationComponent, NotificationInfo } from './styles';

interface NotificationProps {}
const Notification:FC<NotificationProps> = memo((props) => {
    return (
    <NotificationComponent>
        <NotificationIcon />
        <NotificationInfo>99+</NotificationInfo>
    </NotificationComponent>
    )
})

export default Notification;