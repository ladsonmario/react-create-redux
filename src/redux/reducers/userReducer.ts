import { createSlice } from '@reduxjs/toolkit';

export type UserType = {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    connect?: boolean;
} 

const slice = createSlice({
    name: 'user',
    initialState: [] as UserType[],
    reducers: {
        setAddUser: (state, action) => {                        
            state.push(action.payload);               
        },
        setUserLogin: (state, action) => {            
            console.log(state, action.payload);            
            const index = state.findIndex(item => item.email === action.payload.email && item.password === action.payload.password);
            console.log(index);
            if(index !== -1) {
                state[index].connect = true;
            }                        
        }       
        
    }
});

export const { setAddUser, setUserLogin } = slice.actions;
export default slice.reducer;