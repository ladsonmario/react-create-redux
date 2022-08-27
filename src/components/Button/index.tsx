import * as C from './styles';

type Props = {
    content: string;
    bgColor: string;
    color?: string;
    onClick?: () => void;
    disabled?: boolean;    
}
export const Button = ({ content, bgColor, color, onClick, disabled }: Props) => {
    return (
        <C.Button bgColor={bgColor} color={color as string} onClick={onClick} disabled={disabled as boolean}>
            {content}
        </C.Button>
    );
}