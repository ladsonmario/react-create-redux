import { useState } from 'react';
import * as C from './styles';

export const Home = () => {
    const [signin, setSignin] = useState<boolean>(true);
    const [signup, setSignup] = useState<boolean>(false);    

    const handleCreateUser = () => {        
        setSignup(true);
    }

    const handleCancelButton =() => {
        setSignup(false);
    }

    return (
        <C.Container>
            <C.Form>
                <C.Logo>
                    <C.LogoIcon>
                        <C.IconContainer>L</C.IconContainer>
                    </C.LogoIcon>
                    <C.LogoText>LadayBook</C.LogoText>                    
                </C.Logo> 
                <C.Line />               
                {signin &&
                    <>
                        <C.Input type="text" placeholder="Email" />
                        <C.Input type="text" placeholder="Senha" />
                        <C.Input type="button" value="Entrar" />
                        <C.Link>Esqueceu a senha?</C.Link>                        
                        <C.Line />
                        <C.Button onClick={handleCreateUser}>Criar nova conta</C.Button>
                    </>                    
                }
                {signup &&
                    <C.AddUser>
                        <C.Form>
                            <C.Cancel onClick={handleCancelButton}>❌</C.Cancel>
                            <C.Logo>                                
                                <C.LogoText>LadayBook</C.LogoText>                    
                            </C.Logo>
                            Cadastra-se, é rápido e fácil!
                            <C.Line />
                            <C.Input type="text" placeholder="Nome" />
                            <C.Input type="text" placeholder="Sobrenome" />
                            <C.Input type="text" placeholder="Email" />
                            <C.Input type="password" placeholder="Nova senha" />                            
                            <C.Button onClick={handleCreateUser}>Cadastre-se</C.Button>
                        </C.Form>
                    </C.AddUser>
                }
            </C.Form>
        </C.Container>
    );
}