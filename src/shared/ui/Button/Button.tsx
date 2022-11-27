import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonComponent } from './styles';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    textColor?: string;
    rounded?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}
const Button: FC<ButtonProps> = (props) => {
    const {children, color, textColor, rounded, onClick, ...otherProps} = props;

    return (
        <ButtonComponent 
            color={color} 
            textColor={textColor} 
            rounded={rounded}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </ButtonComponent>
    )
}

export default Button