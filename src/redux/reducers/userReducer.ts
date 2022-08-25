import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const slice = createSlice({
    name: 'user',
    initialState: [
        { id: '' },
        { name: '' },
        { lastName: '' },
        { email: '' },
        { password: '' }
    ],
    reducers: {
        setAddUser: (state, action) => {
            if(action.payload.name && action.payload.lastName && action.payload.email&& action.payload.password) {
                state.push({
                    id: v4(),
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                });
            }            
        },
        setResetPassord: (state, action) => {

        }
    }
});

export const { setAddUser, setResetPassord } = slice.actions;
export default slice.reducer;