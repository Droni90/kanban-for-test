import { FC, InputHTMLAttributes, memo } from "react";
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg'
import * as S from './styles'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'>

interface InputProps extends HTMLInputProps  {
    value?: string | number;
    onChange?: (value: string) => void;
    color?: string;
    textColor?: string;
    rounded?: boolean;
    padding?: string
}
const Input: FC<InputProps> = memo((props) => {
    const {type, value, onChange, color, textColor, rounded, padding, ...otherProps} = props 

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      };
    return (
        <S.InputComponent color={color} textColor={textColor} rounded={rounded} padding={padding} >
            <input 
                type={type}
                value={value}
                onChange={onChangeHandler}{...otherProps} />
            <S.Icon>
                <SearchIcon />
            </S.Icon>
        </S.InputComponent>
    )
})

export default Input