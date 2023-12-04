import { configureStore } from "@reduxjs/toolkit";
import lettersReducer from "../modules/lettersReducer";
import toggleLetterReducer from "../modules/toggleLetterReducer";
import authSlice from "../modules/authSlice";

const store = configureStore({
    reducer: {
        lettersReducer,
        toggleLetterReducer,
        authSlice,
    },
});

export default store;
