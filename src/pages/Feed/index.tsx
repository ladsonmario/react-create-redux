import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { PostType, setAddPost, setDelPost } from '../../redux/reducers/postReducer';
import { Posts0, Posts1, Posts2, Posts3, Posts4 } from '../../helpers/posts';
import PerfilImg from '../../images/perfil.png';
import LikeImg from '../../images/like.png';
import { Panel } from '../../components/Panel';
import { Button } from '../../components/Button';
import { useDispatch } from 'react-redux';
import * as C from './styles';
import { useParams } from 'react-router-dom';

export const Feed = () => {
    const user = useAppSelector(state => state.user);
    const post = useAppSelector(state => state.post);
    
    const dispatch = useDispatch();
    const params = useParams();

    const [textearea, setTextearea] = useState<string>('');

    const handleTextearea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextearea( e.target.value );
    }

    useEffect(() => {
        if(post.length === 0) {
            loadingPosts();
        }
    }, []);

    const loadingPosts = () => {       
        dispatch( setAddPost(Posts0) );
        dispatch( setAddPost(Posts1) );
        dispatch( setAddPost(Posts2) );
        dispatch( setAddPost(Posts3) );
        dispatch( setAddPost(Posts4) );
    }
    
    const handleAddPost = () => {
        if(textearea) {
            const index = user.findIndex(item => item.username === params.username);
            if(index !== -1) {
                const Post: PostType = {
                    id: v4(),
                    date: new Date().toString(),
                    username: user[index].username,
                    post: textearea,
                    like: 0
                }

                dispatch( setAddPost(Post) );
                setTextearea('');
            }
        }
    }

    const handleDelPost = (id: string) => {
        if(id) {
            dispatch( setDelPost(id) );
        }
    }

    return (        
        <C.Container>
            <Panel /> 
            <C.NewPost>
                <C.PerfilImgContainer>
                    <C.PerfilImg src={PerfilImg} alt="" />
                </C.PerfilImgContainer>
                <C.Textarea placeholder="No que você está pensando?" value={textearea === '' ? '' : textearea} onChange={handleTextearea}></C.Textarea>
                <Button content="Publicar" bgColor="" onClick={handleAddPost} color="#000" />
            </C.NewPost>
            <C.Feed>
                {post.map((item, index) => (
                    <C.Post key={index}> 
                        {item.username === params.username &&
                            <C.Link onClick={() => handleDelPost(item.id)}>Excluir</C.Link>                       
                        }                        
                        <C.ImgNameHours>
                            <C.PostImg>
                                <C.PerfilImgPost src={PerfilImg} alt="" />
                            </C.PostImg>
                            <C.NameHours>
                                <C.Name>@{item.username}</C.Name>
                                <C.Hours>{item.date}</C.Hours>
                            </C.NameHours>                            
                        </C.ImgNameHours>
                        <C.PostContent>{item.post}</C.PostContent>
                        <C.Line />
                        <C.LikeContainer>
                            <C.LikeIcon src={LikeImg} alt="" />
                            {item.like}
                        </C.LikeContainer>                        
                    </C.Post>
                ))}
            </C.Feed>           
        </C.Container>        
    );
}