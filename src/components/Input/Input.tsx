import { FC, InputHTMLAttributes } from "react";
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<InputProps> = (props) => {
    return (
        <S.InputComponent>
            <input {...props} />
            <S.Icon>
                <SearchIcon />
            </S.Icon>
        </S.InputComponent>
    )
}

export default Input