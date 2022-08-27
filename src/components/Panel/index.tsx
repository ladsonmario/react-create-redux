import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Logo } from '../Logo';
import { Button } from '../Button';
import * as C from './styles';
import { useEffect } from 'react';

export const Panel = () => {
    const user = useAppSelector(state => state.user);
    const params = useParams();
    const navigate = useNavigate();

    const index = user.findIndex(item => item.username === params.username);
    
    useEffect(() => {
        if(index === -1) {        
            navigate('/');
            setTimeout(() => {
                alert('Crie uma conta ou faça login!');
            }, 100);            
        }
    }, [index]);      
    
    const handleExit = () => {
        navigate('/');
    }

    return (
        <C.Container>
            <C.Panel>
                {user[index] &&
                    <Logo icon={true} content={`${user[index].name} ${user[index].lastName}`} />
                }                
                <C.Div>
                    <Button content="Perfil" bgColor="#1877f2" disabled={true} />
                    <Button content="Sair" bgColor="#CC2427" onClick={handleExit} />
                </C.Div>
            </C.Panel>  
            <C.Line />         
        </C.Container>
    );
}