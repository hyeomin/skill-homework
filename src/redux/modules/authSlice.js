import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../axios/authApi";

const initialState = {
    user: [
        {
            userId: "test id",
            password: "test password",
            nickname: "test nickname",
            accessToken: "token test",
            avatar: "avatar test",
        },
    ],
    isLoading: false,
    isError: null,
    accessToken: null,
};

export const __signUp = createAsyncThunk(
    "signUp",
    async (paylaod, thunkAPI) => {
        try {
            const response = await authApi.post(`/register`, paylaod);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __logIn = createAsyncThunk("logIn", async (paylaod, thunkAPI) => {
    try {
        const response = await authApi.post(`/login`, paylaod);
        console.log("Login response data:", response.data);
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __authorizeUser = createAsyncThunk(
    "authorizeUser",
    async (paylaod, thunkAPI) => {
        try {
            const response = await authApi.get(`/user`, paylaod);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __profileUpdate = createAsyncThunk(
    "profileUpdate",
    async (paylaod, thunkAPI) => {
        try {
            const response = await authApi.patch(`/profile`, paylaod);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logOutAndClearStorage = () => (dispatch) => {
    localStorage.removeItem("activeUser");
    dispatch(logOut());
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        logOut: (state, action) => {
            state.user = initialState.user;
            state.accessToken = null;
        },
    },
    extraReducers: {
        [__signUp.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [__signUp.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.user = action.payload;
        },

        [__signUp.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
        [__logIn.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.user = {
                userId: action.payload.userId,
                avatar: action.payload.avatar,
                nickname: action.payload.nickname,
            };

            state.accessToken = action.payload.accessToken;
        },
        [__authorizeUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.accessToken = action.payload;
        },
    },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
