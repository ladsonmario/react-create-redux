import * as C from './styles';

type Props = {
    content: string;
    bgColor: string;
    color?: string;
    onClick: () => void;
}
export const Button = ({ content, bgColor, color, onClick }: Props) => {
    return (
        <C.Button bgColor={bgColor} color={color as string} onClick={onClick}>
            {content}
        </C.Button>
    );
}