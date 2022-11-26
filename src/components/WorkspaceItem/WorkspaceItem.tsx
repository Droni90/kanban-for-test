import { memo } from "react"
import * as S from "./styles"

interface WorkspaceItemProps  {
    avatar: string;
    name: string;
}
const WorkspaceItem = memo((props: WorkspaceItemProps) => {
    const {avatar, name} = props
    return <S.Workspace>
        <div>
            <img src={avatar} alt={'Avatar'} />
            <p>{name}</p>
        </div>
    </S.Workspace>
})

export default WorkspaceItem