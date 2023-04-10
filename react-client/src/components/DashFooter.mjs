import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth.mjs'
const DashFooter = () => {
    const { setAuth, auth } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const handleHomeClick = () => {
        navigate('/dash')
    }

    const handleLogout = async () => {
        setAuth({})
        navigate('/')
    }

    let goHomeButton = null
    if (pathname !== '/dash' && pathname !== '/dash/') {
        goHomeButton = (
            <button 
                className="dash-footer__button icon-button"
                title="Go Home"
                onClick={handleHomeClick}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    return (
        <footer className="dash-footer">
            <button
                className="dash-footer__button icon-button"
                title="Log Out"
                onClick={handleLogout}
            >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>

            {goHomeButton}
            <p>Current User: {`${auth.user}`}</p>
        </footer>
    )
}

export default DashFooter   