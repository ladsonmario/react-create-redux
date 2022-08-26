import PerfilImg from '../../images/perfil.png';
import { Panel } from '../../components/Panel';
import * as C from './styles';

export const Feed = () => {
    return (        
        <C.Container>
            <Panel /> 
            <C.NewPost>
                <C.PerfilImgContainer>
                    <C.PerfilImg src={PerfilImg} alt="" />
                </C.PerfilImgContainer>
                <C.Textarea placeholder={`No que você está pensando?`}></C.Textarea>
            </C.NewPost>           
        </C.Container>        
    );
}