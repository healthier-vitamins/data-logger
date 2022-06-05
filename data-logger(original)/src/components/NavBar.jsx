import { Link } from "react-router-dom";
import MonthlyView from "../pages/MonthlyView";
import Home from "../pages/Home";

function NavBar() {
  return (
    <>
      <Link to="/" element={<Home />}>Home</Link>
      <Link to="/monthly-view" element={<MonthlyView />}>Monthly View</Link>
    </>
  );
}
export default NavBar;
