import { useDispatch, useSelector } from "react-redux";
import { authService } from "../services/auth.service";
import { setUser,setError,setLoading,logoutUser } from "../states/auth.slice";
import { useCallback } from "react";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, loading, error, isInitialized } = useSelector((state) => state.auth);
    
    const login = async (credentials) => {
        dispatch(setLoading(true));
        try {
            const user = await authService.login(credentials);
            dispatch(setUser(user));
            return { success: true, user };
        } catch (error) {
            dispatch(setError(error.message));
            return { success: false, error: error.message || "Failed to log in" };
        }
    };

    const register = async (userData) => {
        dispatch(setLoading(true));
        try {
            const user = await authService.register(userData);
            dispatch(setUser(user));
            return { success: true, user };
        } catch (error) {
            dispatch(setError(error.message));
            return { success: false, error: error.message || "Failed to register" };
        }
    };

    const getMe = useCallback(async () => {
        dispatch(setLoading(true));
        try {
            const user = await authService.getMe();
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        }
    },[dispatch]);

    const logout = async () => {
        dispatch(setLoading(true));
        try {
            await authService.logout();
            dispatch(logoutUser());
        } catch (error) {
            dispatch(setError(error.message));
        }
    };

    return { user, loading, error, isInitialized, login, register, getMe, logout };
}