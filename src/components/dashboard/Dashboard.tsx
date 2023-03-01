import Demo from "../demo/Demo";
import "./dashboard.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard__box">
      <Demo />
      <div className="dashboard__box_content">
        <div className="networth__box">
          <div className="networth__box__text">
            <span>
              <IoMdArrowDropdown className="icon-right" />
              <h2>NET WORTH</h2>
            </span>
            <h2>35,674 USD</h2>
          </div>
          <div className="networth__box__table_box">
            <div className="cash__box">
              <h3>Cash</h3>
              <h3>1,270 USD</h3>
            </div>
            <div className="wallet__box">
              <div className="wallet__name_box">
                <Link to="">Alice's wallet</Link>
              </div>
              <div className="wallet__name_box_text">
              <h3>434.82 USD</h3>
              <h3>0.00 EUR</h3>
              <h3>0 JPY</h3>
              </div>

            </div>
            <div className="wallet__box">
              <div className="wallet__name_box">
                <Link to="">Bob's wallet</Link>
              </div>
              <div className="wallet__name_box_text">
              <h3>372.15 USD</h3>
              <h3>300.00 EUR</h3>
              <h3>11,300 JPY</h3>
              </div>
            </div>
            
          </div>
        </div>
        <div className="nettransactions__box">
          <div className="transaction__box">
            <div className="transaction__box__text">
              <span>
                <IoMdArrowDropright />
                <h2>New Transaction</h2>
              </span>
            </div>
            <div className="transaction__box__table_box"></div>
          </div>
          <div className="recent__box">
            <div className="recent__box__text">
              <span>
                <IoMdArrowDropright />
                <h2>Recent Transaction</h2>
              </span>
            </div>
            <div className="recent__box_table_box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
