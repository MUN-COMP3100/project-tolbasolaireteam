import { useRef, useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.mjs";
import axios from "../../api/axios.mjs";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dash';
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth', 
                JSON.stringify({
                    email: user,
                    password: pwd
                }),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            console.log(accessToken, roles);
            setAuth({user, pwd, accessToken, roles});
            setPwd('');
            setUser('');
            navigate(from, { replace: true });
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('Server error. No response from server.');
                } else if (err.response?.status === 400) {
                    setErrMsg('Invalid credentials.');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized.');
                } else {
                    setErrMsg('Login failed.');
                }
                errRef.current.focus();
            }
    }
    

    return (
        <section className="register">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="email" className="loginLabel">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    value={user}
                />
                <label htmlFor="password" className="loginLabel">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    value={pwd}
                />
                <button type="submit">Sign In</button>
            </form>
            <p>
                Need an account? <br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>
    )
}

export default Login