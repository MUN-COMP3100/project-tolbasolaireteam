import { axiosPrivate } from "../api/axios.mjs";
import useAuth from "./useAuth.mjs";
import useRefreshToken from "./useRefreshToken.mjs";
import { useEffect } from "react";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const reqInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers.Authorization = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const resInterceptor = axiosPrivate.interceptors.response.use(
            res => res,
            async err => {
                const prevReq = err?.config;
                if (err?.response?.status === 403 && !prevReq.sent) {
                    prevReq.sent = true;
                    const accessToken = await refresh();
                    prevReq.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosPrivate(prevReq);
                }
                return Promise.reject(err);
            }
        );

        return () => {
            axiosPrivate.interceptors.response.eject(resInterceptor);
            axiosPrivate.interceptors.request.eject(reqInterceptor);
        }
    }, [auth, refresh]);

    return axiosPrivate;
}

export default useAxiosPrivate;