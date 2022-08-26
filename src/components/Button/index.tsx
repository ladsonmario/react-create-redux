import * as C from './styles';

type Props = {
    content: string;
    bgColor: string;
    onClick: () => void;
}
export const Button = ({ content, bgColor, onClick }: Props) => {
    return (
        <C.Button bgColor={bgColor} onClick={onClick}>
            {content}
        </C.Button>
    );
}