import {memo, FC} from 'react'
import * as S from './styles'

interface TitleProps {
    name: string;
    count: number;
}
const Title: FC<TitleProps> = memo((props) => {
    const {name, count} = props;

    return(
    <S.TitleComponent>
        <S.Name>{name}</S.Name>
        <S.Count>{count}</S.Count>
    </S.TitleComponent>)
})

export default Title;