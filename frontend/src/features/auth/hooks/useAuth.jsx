import { useDispatch, useSelector } from "react-redux";
import { authService } from "../services/auth.service";
import { setUser,setError,setLoading,logoutUser } from "../states/auth.slice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);
    const login = async (credentials) => {
        dispatch(setLoading(true));
        try {
            const user = await authService.login(credentials);
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };

    const register = async (userData) => {
        dispatch(setLoading(true));
        try {
            const user = await authService.register(userData);
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };

    const getMe = async () => {
        dispatch(setLoading(true));
        try {
            const user = await authService.getMe();
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };

    const logout = async () => {
        dispatch(setLoading(true));
        try {
            await authService.logout();
            dispatch(logoutUser());
        } catch (error) {
            dispatch(setError(error.message));
        }
    };

    return { user, loading, error, login, register, getMe, logout };
}