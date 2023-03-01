import Demo from "../demo/Demo";
import "./dashboard.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [cash, setCash] = useState(false);
  const [bank, setBank] = useState(false);
  const [credit, setCredit] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [recent, setRecent] = useState(false);

  return (
    <div className="dashboard__box">
      <Demo />
      <div className="dashboard__box_content">
        <div className="networth__box">
          <div className="networth__box__text">
            <span onClick={() => setShow(!show)}>
              {show === true ? (
                <IoMdArrowDropdown className="icon-right" />
              ) : (
                <IoMdArrowDropright className="icon-right" />
              )}
              <h2>NET WORTH</h2>
            </span>
            <h2>35,674 USD</h2>
          </div>
          {show === true && (
            <div className="networth__box__table_box">
              <div className="cash__box" onClick={() => setCash(!cash)}>
                <h3>Cash</h3>
                <h3>1,270 USD</h3>
              </div>
              {cash === true && (
                <>
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
                </>
              )}
              <div className="cash__box" onClick={() => setBank(!bank)}>
                <h3>Bank Account</h3>
                <h3>25,823 USD</h3>
              </div>
              {bank === true && (
                <>
                  <div className="wallet__box">
                    <div className="wallet__name_box">
                      <Link to="">Checking</Link>
                    </div>
                    <div className="wallet__name_box_text">
                      <h3>8,501.75 USD</h3>
                      <h3>1,100.00 EUR</h3>
                    </div>
                  </div>
                  <div className="wallet__box" style={{ alignItems: "center" }}>
                    <div className="wallet__name_box">
                      <Link to="">Savings</Link>
                    </div>
                    <div className="wallet__name_box_text">
                      <h3>16,000.00 USD</h3>
                    </div>
                  </div>
                </>
              )}
              <div className="cash__box" onClick={() => setCredit(!credit)}>
                <h3>Credit</h3>
                <h3>0 USD</h3>
              </div>
              {credit === true && (
                <>
                  <div className="wallet__box" style={{ alignItems: "center" }}>
                    <div className="wallet__name_box">
                      <Link to="">MasterCard *6803</Link>
                    </div>
                    <div className="wallet__name_box_text">
                      <h3>0 JPY</h3>
                    </div>
                  </div>
                  <div className="wallet__box">
                    <div
                      className="wallet__name_box"
                      style={{ alignItems: "center" }}
                    >
                      <Link to="">Visa *2474</Link>
                    </div>
                    <div className="wallet__name_box_text">
                      <h3>0.00 USD</h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="nettransactions__box">
          <div className="transaction__box">
            <div className="transaction__box__text">
              <span onClick={() => setTransaction(!transaction)}>
                {transaction === true ? (
                  <IoMdArrowDropdown className="icon-right" />
                ) : (
                  <IoMdArrowDropright className="icon-right" />
                )}
                <h2>NEW TRANSACTION</h2>
              </span>
            </div>
            {transaction === true && (
              <>
                <div className="transaction__box__table_box">
                  <div className="transaction__box__table">
                    <div className="transaction__box__table_head">
                      <span>Expense</span>
                      <span>Transfer</span>
                      <span>Income</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="recent__box">
            <div className="recent__box__text">
              <span onClick={() => setRecent(!recent)}>
                {recent === true ? (
                  <IoMdArrowDropdown className="icon-right" />
                ) : (
                  <IoMdArrowDropright className="icon-right" />
                )}
                <h2>RECENT TRANSACTIONS</h2>
              </span>
            </div>
            {recent === true && (
              <>
                <div className="recent__box_table_box"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
