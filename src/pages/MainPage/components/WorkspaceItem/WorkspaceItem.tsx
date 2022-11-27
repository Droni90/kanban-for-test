import { memo } from "react"
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import * as S from "./styles"

interface WorkspaceItemProps  {
    avatar: string;
    name: string;
}
const WorkspaceItem = memo((props: WorkspaceItemProps) => {
    const {avatar, name} = props
    return <S.Workspace>
        <div>
            <Avatar width="22px" height="22px" src={avatar} />
            <p>{name}</p>
        </div>
    </S.Workspace>
})

export default WorkspaceItem