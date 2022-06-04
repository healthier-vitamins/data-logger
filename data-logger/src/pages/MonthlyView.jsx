import { Outlet, Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import Home from "./Home";

function MonthlyView () {
    return (
        <>
        <Link to="/" element={<Home />}>Home</Link>
        <p>monthlyyyy</p>
        <Calendar />
        <Outlet />
        </>

    )
}
export default MonthlyView;