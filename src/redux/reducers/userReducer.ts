import { createSlice } from '@reduxjs/toolkit';

export type UserType = {
    id: string;
    name: string;
    lastName: string;
    username: string;
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
            if(action.payload.email && action.payload.password) {
                const index = state.findIndex(item => item.email === action.payload.email && item.password === action.payload.password);
                console.log(index);
                if(index !== -1) {
                    state[index].connect = true;
                }
            } 
            if(action.payload.username && action.payload.password) {
                const index = state.findIndex(item => item.username === action.payload.username && item.password === action.payload.password);
                console.log(index);
                if(index !== -1) {
                    state[index].connect = true;
                }
            }                      
            
            console.log(state, action.payload);                         
        }       
        
    }
});

export const { setAddUser, setUserLogin } = slice.actions;
export default slice.reducer;