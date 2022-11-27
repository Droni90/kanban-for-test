import  {memo, FC, useState, useCallback} from 'react'
import Button from '../Button/Button';
import {ReactComponent as UpIcon} from '../../../assets/icons/up.svg'
import {ReactComponent as DownIcon} from '../../../assets/icons/down.svg'
import * as S from './styles'

interface DropdownProps {
    options: string[];
}
const Dropdown:FC<DropdownProps> = memo((props) => {
    const {options} = props
    const [selectedOption, setSelectedOption] = useState<string>(options[options.length - 1] );
    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

    const onOptionClicked = useCallback((value: string) => () => {
      setSelectedOption(value);
      setIsOpen(false);
    }, []);


    return (
        <S.DropdownComponent>
            <Button 
                type='button' 
                rounded 
                color={isOpen ? '#E1E4E7' : "#F5F8FA"  }
                textColor='#222' 
                onClick={toggleMenu}
            >
                <span>{selectedOption}</span>
                {isOpen ? <DownIcon fill='#8C939F' /> : <UpIcon />} 
            </Button>
            {isOpen && <S.Items>
            {options.map((option) => (
                <S.ListItem
                    key={option}
                    onClick={onOptionClicked(option)}
                >
                    {option}
                </S.ListItem>
            
            ))}
            </S.Items>}
            
        </S.DropdownComponent>
    )
})

export default Dropdown;