import styled from "styled-components";

export const Container = styled.div`
    
`;

export const NewPost = styled.div`
    background-color: #fff;
    display: flex;    
    border-radius: 10px;
    box-shadow: 0 0 5px #333;
    margin-bottom: 20px;
`;

export const PerfilImgContainer = styled.div`
    width: 20%;
    padding: 5px;
`;

export const PerfilImg = styled.img`
    width: 100%;
    object-fit: contain;
`;

export const Textarea = styled.textarea`    
    width: 80%;
    border: 0;
    outline: 0;
    resize: none;
    border-radius: 10px;
    padding: 10px;
`;

export const Feed = styled.div`
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 5px #333;
    padding: 10px;
`;

export const Post = styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    margin: 10px 0;    
    box-shadow: 0 0 5px #333;
    position: relative;
`;

export const ImgNameHours = styled.div`
    display: flex;
`;

export const PostImg = styled.div`    
    margin-right: 10px; 
`;

export const PerfilImgPost = styled.img`
    width: 40px;
    height: 40px;
`;

export const NameHours = styled.div`
    margin-bottom: 15px;
`;

export const Name = styled.div`
    font-weight: 600;
`;

export const Hours = styled.small`
    font-size: 12px;
    color: #333;
`;

export const PostContent = styled.div``;

export const Line = styled.hr`
    color: #ddd;
    margin: 10px 0;
`;

export const LikeContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LikeIcon = styled.img`
    width: 20px;
`;

export const Link = styled.span`
    position: absolute;
    right: 10px;
    color: #1877f2;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;