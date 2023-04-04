import { useContext } from "react";
import AuthContext from "../context/AuthProvider.mjs";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;