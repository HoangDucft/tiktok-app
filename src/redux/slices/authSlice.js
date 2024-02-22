import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '~/services';

import { useLocalStorage } from '~/hooks';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { setDataStorage } = useLocalStorage();

//action register
export const register = createAsyncThunk('auth/register', async (registerData) => {
    const responseData = await authService.register(registerData);
    return responseData;
});

const initialState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            const userData = action.payload.data;
            if (userData?.nickname) {
                const token = action.payload.meta.token;
                const dataLocalStorage = {
                    token,
                };
                window.alert('da vao ham extraReducer');
                setDataStorage(dataLocalStorage);
            }
        });
    },
});

const { reducer } = authSlice;
export default reducer;
