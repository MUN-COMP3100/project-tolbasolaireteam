import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader.mjs"
import DashFooter from "./DashFooter.mjs"

const DashLayout = () => {
    return (
        <main className="container">
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </main>
    )
}

export default DashLayout