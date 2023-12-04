import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dataApi from "../../axios/dataApi";

export const __fetchLetter = createAsyncThunk(
    "fetchLetter",
    async (payload, thunkAPI) => {
        try {
            const response = await dataApi.get(`/letters`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __addLetter = createAsyncThunk(
    "addLetter",
    async (payload, thunkAPI) => {
        try {
            const response = await dataApi.post(`/letters`, payload);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __deleteLetter = createAsyncThunk(
    "deleteLetter",
    async (payload, thunkAPI) => {
        try {
            const response = await dataApi.delete(`/letters/${payload}`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    letters: [
        {
            id: 0,
            letterNumber: 1,
            userId: "test",
            userNickname: "test",
            content: "content test",
            writtenTo: "test Jim",
            createdAt: "testdate",
            updatedAt: "testdate",
        },
    ],
    isLoading: false,
    isError: null,
};

const letterSlice = createSlice({
    name: "letters",
    initialState,
    reducers: {},
    extraReducers: {
        [__fetchLetter.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [__fetchLetter.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.letters = action.payload;
        },

        [__fetchLetter.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    },
});

export default letterSlice.reducer;
