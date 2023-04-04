import { Link } from "react-router-dom";  

const DashHeader = () => {
    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title"> Meal Planner </h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* add buttons later */}
                </nav>
            </div>
        </header>
    )

    return content
}

export default DashHeader