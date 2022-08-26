import * as C from './styles';

type Props = {
    children: React.ReactNode;
}
export const Background = ({ children }: Props) => {
    return (
        <C.Container>
            <C.Opacity>
                {children}
            </C.Opacity>            
        </C.Container>
    );
}