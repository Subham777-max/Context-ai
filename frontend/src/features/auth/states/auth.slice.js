import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: true,
        error: null,
        isInitialized: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.isInitialized = true;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.isInitialized = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
            state.isInitialized = true;
        }
    },
});

export const { setUser, setLoading, setError, logoutUser } = authSlice.actions;
export default authSlice.reducer;