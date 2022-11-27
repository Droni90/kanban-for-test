import  {memo, FC} from 'react'
import { AvatarComponent } from './styles';

interface AvatarProps {
    src: string;
    width: string;
    height: string;
}
const Avatar: FC<AvatarProps> = memo((props) => {
    const { src, width, height } = props;

    return (
        <AvatarComponent width={width} height={height} src={src} alt='Avatar' />
    )
})

export default Avatar;