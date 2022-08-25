import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

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
        setAddUser: (state, action: PayloadAction<UserType>) => {            
            state.push(action.payload);                        
        },
        setUserConnect: (state, action) => {
            const index = state.findIndex(item => item.email === action.payload);
            if(index !== -1) {
                state[index].name = 'alterado';
            }
        },
        setResetPassord: (state, action) => {

        },
        setUserSearch: (state, action) => {
            state.filter(item => item.email === action.payload);             
        }
    }
});

export const { setAddUser, setResetPassord, setUserConnect, setUserSearch } = slice.actions;
export default slice.reducer;