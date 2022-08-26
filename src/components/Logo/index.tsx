import * as C from './styles';

type Props = {
    content?: string;
    icon?: boolean;
}
export const Logo = ({ content, icon }: Props) => {
    return (
        <C.Logo>
            {icon &&
                <C.LogoIcon>
                    <C.IconContainer>L</C.IconContainer>
                </C.LogoIcon>
            }            
            {content &&
                <C.LogoText>{content}</C.LogoText>
            }            
        </C.Logo>
    );
}