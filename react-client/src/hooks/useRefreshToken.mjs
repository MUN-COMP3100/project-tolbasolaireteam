import axios from "../api/axios.mjs"
import useAuth from "./useAuth.mjs"

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const res = await axios.post('/refresh', { withCredentials: true });
            setAuth(prev => ({...prev, accessToken: res?.data?.accessToken}));
            return res.data.accessToken;
        } catch (err) {
            console.log(err);
        }
    }

    return refresh;
}

export default useRefreshToken