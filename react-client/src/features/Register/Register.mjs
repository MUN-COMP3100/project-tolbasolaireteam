import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../api/axios.mjs';
import validator from 'validator';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [user, setUser] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = validator.isEmail(user);
        setValidEmail(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = validator.isEmail(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg('Invalid entry.');
            return;
        }
        try {
            const response = await axios.post('/register', 
                JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: user,
                password: pwd
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(response));
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No response from server.');
            } 
            else if (err.response.status === 409) {
                setErrMsg('Email already registered.');
            }
            else {
                setErrMsg(`${err.response.message}`);
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className='register'>
                    <h1>Registration Successful</h1>
                    <p>
                        <Link to='/login'>Log in</Link>
                    </p>
                </section>
            ) : (
            
                <section className='register'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form className='registerForm' onSubmit={handleSubmit}>
                        <label htmlFor="firstName" className='registerLabel'>
                            First Name:
                        </label>
                        <input
                            type='text'
                            id='firstName'
                            ref={userRef}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="lastName" className='registerLabel'>
                            Last Name:
                        </label>
                        <input
                            type='text'
                            id='lastName'
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="email" className='registerLabel'>
                            Email:
                            <span className={validEmail ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validEmail || !user ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type='email'
                            id='email'
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} /> 
                            Enter a valid email address.
                        </p>
                        <label htmlFor="pwd" className='registerLabel'>
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type='password'
                            id='pwd'
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Password must be 8-24 characters long. <br />
                            It must contain at least one uppercase letter, one lowercase letter, one number, 
                            and one special character. <br />
                        </p>
                        <label htmlFor="matchPwd" className='registerLabel'>
                            Confirm Password:
                            <span className={validMatchPwd && matchPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatchPwd || !matchPwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type='password'
                            id='matchPwd'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatchPwd ? "false" : "true"}
                            aria-describedby="matchPwdnote"
                            onFocus={() => setMatchPwdFocus(true)}
                            onBlur={() => setMatchPwdFocus(false)}
                        />
                        <p id="matchPwdnote" className={matchPwdFocus && !validMatchPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Passwords must match.
                        </p>
                        <button
                            type='submit'
                            className='registerButton'
                            disabled={!validEmail || !validPwd || !validMatchPwd || !firstName || !lastName}
                        >
                            Sign up
                        </button>
                    </form>
                    <p>
                        Already have an account?<br />
                        <span className="line">
                            <Link to='/login'>Log in</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register