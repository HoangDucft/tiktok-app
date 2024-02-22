import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '~/hooks';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { getDataStorage } = useLocalStorage();

const initialState = {
    volume: getDataStorage.volume || 0.6,
    muted: true,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        // change volume when move range volume without muted
        changeVolume: (state, action) => {
            const volumeValue = action.payload;
            state.volume = volumeValue;
        },

        // changed volume when move range volume while muted
        changeMuted: (state, action) => {
            state.muted = action.payload;
        },

        // toggle muted button
        toggleMuted: (state) => {
            state.muted = !state.muted;
        },
    },
});

const { actions, reducer } = videoSlice;
export const { changeMuted, changeVolume, toggleMuted } = actions;
export default reducer;
