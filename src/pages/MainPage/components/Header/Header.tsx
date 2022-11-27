import {memo, useMemo, FC} from 'react'
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import Input from "../../../../shared/ui/Input/Input";
import AvatarImg from "../../../../assets/images/Avatar.png"
import Button from "../../../../shared/ui/Button/Button";
import {ReactComponent as PlusIcon} from "../../../../assets/icons/plus.svg"
import * as S from './styles'
import Dropdown from "../../../../shared/Dropdown/Dropdown";
import Notification from "./components/Notification/Notification";

const Header: FC = memo(() => {
    const optionsTable = useMemo(() => ['Board view', 'Table view', 'Kanban'], [])
    const filters = useMemo(() => ["Filters"], [])
    
    return (
    <S.Header>
        <S.Left>
            <Button type="button" rounded>
                <PlusIcon fill="#fff" />
                <span>Add new</span>
            </Button>
            <S.MarginRight />
            <Dropdown options={optionsTable} />
            <S.MarginRight />
            <Dropdown options={filters} />
        </S.Left>
        <S.Right>
            <Input color="#F5F8FA" textColor='#8C939F' placeholder='Search...' rounded padding="12px 16px" />
            <Notification />
            <Avatar src={AvatarImg} width='40px' height='40px'  />
        </S.Right>
    </S.Header>
)})

export default Header;