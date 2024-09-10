import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../store/theme/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})