import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addLetterOpened: false,
    isEditing: false,
    letter: null,
};

const toggleLetterSlice = createSlice({
    name: "toggleLetter",
    initialState,
    reducers: {
        toggleAddLetter: (state, action) => {
            return { ...state, addLetterOpened: action.payload };
        },
        startEditLetter: (state, action) => {
            return {
                ...state,
                addLetterOpened: true,
                isEditing: true,
                letter: action.payload,
            };
        },
    },
});

export default toggleLetterSlice.reducer;
export const { toggleAddLetter, startEditLetter } = toggleLetterSlice.actions;
