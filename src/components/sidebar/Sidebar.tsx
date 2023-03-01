import {
  FaRegNewspaper,
  FaExchangeAlt,
  FaCreditCard,
  FaChartLine,
  FaShoppingBasket,
} from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar_box">
      <div className="sidebar_box_list">
        <Link
          to={"/"}
          className={`link ${location.pathname === "/" ? "active" : ""}`}
        >
          <FaRegNewspaper className="icon" />
          Dashboard
        </Link>
        <Link
          to={"transactions"}
          className={`link ${
            location.pathname === "/transactions" ? "active" : ""
          }`}
        >
          <FaExchangeAlt className="icon" />
          Transactions
        </Link>
        <Link
          to={"accounts"}
          className={`link ${
            location.pathname === "/accounts" ? "active" : ""
          }`}
        >
          <FaCreditCard className="icon" />
          Accounts
        </Link>
        <Link
          to={"reports"}
          className={`link ${location.pathname === "/reports" ? "active" : ""}`}
        >
          <FaChartLine className="icon" />
          Reports
        </Link>
        <Link
          to={"budget"}
          className={`link ${location.pathname === "/budget" ? "active" : ""}`}
        >
          <FaShoppingBasket className="icon" />
          Budget
        </Link>
        <Link
          to={"settings"}
          className={`link ${
            location.pathname === "/settings" ? "active" : ""
          }`}
        >
          <IoOptionsSharp className="icon" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
