import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useAppSelector } from '../../redux/hooks/useAppSelector'; 
import { setAddUser, setUserConnect, UserType } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './styles';

export const Home = () => {
    const user = useAppSelector(state => state.user);

    const dispatch = useDispatch();

    const [signin, setSignin] = useState<boolean>(true);
    const [signup, setSignup] = useState<boolean>(false);    
    const [nameInput, setNameInput] = useState<string>('');
    const [lastNameInput, setLasNameInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput( e.target.value );
    }

    const handleLastNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLasNameInput( e.target.value );
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput( e.target.value );
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput( e.target.value );
    }

    const resetInputs = () => {
        setNameInput('');
        setLasNameInput('');
        setEmailInput('');
        setPasswordInput('');
    }

    const handleAddNewUser = () => {        
        setSignup(true);          
        resetInputs();      
    }

    const handleCancelButton = () => {
        setSignup(false);
        resetInputs();
    }

    const handleCreateUser = () => {
        if(nameInput && lastNameInput && emailInput && passwordInput) {            
            const email: boolean = user.some(item => item.email === emailInput);

            if(!email) {
                const User: UserType = {
                    id: v4(),
                    name: nameInput,
                    lastName: lastNameInput,
                    email: emailInput,
                    password: passwordInput                
                }

                dispatch(
                    setAddUser(User)
                );

                alert('Usuário criado com sucesso, faça seu Login');
                setSignup(false);            
                resetInputs();
            } else {
                alert('E-mail já existe, por favor tente outro!');
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleUserLogin = () => {
        if(emailInput && passwordInput) {                      
            
            
        } else {
            alert('Preencha todos os campos!');
        }
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
                        <C.Input type="text" placeholder="Email" value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                        <C.Input type="text" placeholder="Senha" value={passwordInput === '' ? '' : passwordInput} onChange={handlePasswordInput} />
                        <C.Input type="button" value="Entrar" onClick={handleUserLogin} />
                        <C.Link>Esqueceu a senha?</C.Link>                        
                        <C.Line />
                        <C.Button onClick={handleAddNewUser}>Criar nova conta</C.Button>
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
                            <C.Input type="text" placeholder="Nome" value={nameInput === '' ? '' : nameInput} onChange={handleNameInput} />
                            <C.Input type="text" placeholder="Sobrenome" value={lastNameInput === '' ? '' : lastNameInput} onChange={handleLastNameInput} />
                            <C.Input type="text" placeholder="Email" value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                            <C.Input type="password" placeholder="Nova senha" value={passwordInput === '' ? '' : passwordInput} onChange={handlePasswordInput} />                            
                            <C.Button onClick={handleCreateUser}>Cadastre-se</C.Button>
                        </C.Form>
                    </C.AddUser>
                }
            </C.Form>
        </C.Container>
    );
}