import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import notificationReducer from "../slices/notificationSlice";
import appReducer from "../slices/appSlice";
import languageReducer from "../slices/languageSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        notification: notificationReducer,
        app: appReducer,
        lang: languageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
