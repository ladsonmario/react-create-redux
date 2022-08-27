import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector'; 
import { setAddUser, setUserLogin, UserType } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './styles';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

export const Home = () => {
    const user = useAppSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [signup, setSignup] = useState<boolean>(false);        
    const [nameInput, setNameInput] = useState<string>('');
    const [lastNameInput, setLasNameInput] = useState<string>('');
    const [usernameInput, setUsernameInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput( e.target.value );
    }

    const handleLastNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLasNameInput( e.target.value );
    }

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput( e.target.value );
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
        setUsernameInput('');
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
            const username: boolean = user.some(item => item.username === usernameInput);
            
            if(username) {
                return alert('Nome de usuário já existe, por favor tente outro!');
            }
            if(email) {
                return alert('E-mail já existe, por favor tente outro!');
            }
            
            const Data: UserType = {
                id: v4(),
                name: nameInput,
                lastName: lastNameInput,
                username: usernameInput,
                email: emailInput,
                password: passwordInput                
            }

            dispatch(
                setAddUser(Data)
            );

            alert('Usuário criado com sucesso, faça seu Login');
            setSignup(false);            
            resetInputs();
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleClickLogin = () => { 
        if((emailInput || usernameInput) && passwordInput) {              
            const email: boolean = user.some(item => item.email === emailInput);            
            const password: boolean = user.some(item => item.password === passwordInput);            

            if(email && password) {
                const index = user.findIndex(item => item.email === emailInput);
                const Data = {
                    email: emailInput,
                    password: passwordInput
                }                
                dispatch(
                    setUserLogin(Data)
                );
                navigate(`/feed/${user[index].username}`);
            } else {
                alert('E-mail e/ou senha incorretos!');
            }
            
        } else {
            alert('Preencha todos os campos!')
        }
                        
    }

    return (
        <C.Container>
            <C.Form>
                <Logo content="LadayBook" icon={true} /> 
                <C.Line />                     
                <C.Input type="text" placeholder="E-mail" value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                <C.Input type="password" placeholder="Senha" value={passwordInput === '' ? '' : passwordInput} onChange={handlePasswordInput} />
                <C.Input type="submit" value="Entrar" onClick={handleClickLogin} />                        
                <C.Link>Esqueceu a senha?</C.Link>                        
                <C.Line />                
                <Button content="Criar nova conta" bgColor="#36a420" onClick={handleAddNewUser} />
                {signup &&
                    <C.AddUser>
                        <C.Form>
                            <C.Cancel onClick={handleCancelButton}>❌</C.Cancel>
                            <Logo content="LadayBook" />
                            Cadastra-se, é rápido e fácil!
                            <C.Line />
                            <C.Input type="text" placeholder="Nome" value={nameInput === '' ? '' : nameInput} onChange={handleNameInput} />
                            <C.Input type="text" placeholder="Sobrenome" value={lastNameInput === '' ? '' : lastNameInput} onChange={handleLastNameInput} />
                            <C.Input type="text" placeholder="Nome de usuário" value={usernameInput === '' ? '' : usernameInput} onChange={handleUsernameInput} />
                            <C.Input type="text" placeholder="Email" value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                            <C.Input type="password" placeholder="Nova senha" value={passwordInput === '' ? '' : passwordInput} onChange={handlePasswordInput} />                                                        
                            <Button content="Cadastre-se" bgColor="#36a420" onClick={handleCreateUser} />
                        </C.Form>
                    </C.AddUser>
                }
            </C.Form>
        </C.Container>
    );
}