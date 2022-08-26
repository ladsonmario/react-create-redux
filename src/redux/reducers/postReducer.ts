import { createSlice } from '@reduxjs/toolkit';
export type PostType = {
    id: string;
    date: string;
    username: string;
    post: string;
    like: number;
}

const slice = createSlice({
    name: 'posts',
    initialState: [] as PostType[],
    reducers: {
        setAddPost: (state, action) => {
            state.unshift(action.payload);
        },
        setDelPost: (state, action) => {            
            let newArray = state.filter(item => item.id !== action.payload);
            return newArray;
        }
    }
});

export const { setAddPost, setDelPost } = slice.actions;
export default slice.reducer;