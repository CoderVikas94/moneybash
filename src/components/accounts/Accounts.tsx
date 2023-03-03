import { useState } from "react";
import Demo from "../demo/Demo";
import { ImPlus } from "react-icons/im";
import { MdOutlineEdit } from "react-icons/md";
import "./accounts.css";
import { Link } from "react-router-dom";
import AccounAddModal from "./AccounAddModal";
import EditMoney from "./EditMoney";

const Accounts = () => {
  const [cash, setCash] = useState(false);
  const [bank, setBank] = useState(false);
  const [credit, setCredit] = useState(false);
  const [assest, setAssest] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [accountEditModal, setaccountEditModal] = useState(false);

  return (
    <div className="dashboard__box">
      <Demo />
      <div className="accounts__box_content">
        <div className="accounts__top__box">
          <span className="icon-plus_span" onClick={()=>setAccountModal(true)}>
            <ImPlus style={{ color: "rgba(0, 0, 0, 0.5)" }} />
          </span>
          <button className="new-btn" onClick={()=>setAccountModal(true)}>New</button>
        </div>
        <div className="accounts__box__table_box">
          <div className="accounts__box" onClick={() => setCash(!cash)}>
            <h3>Cash</h3>
            <h3>1,270 USD</h3>
          </div>
          {cash === true && (
            <>
              <div className="accounts__wallet__box">
                <div className="accounts__wallet__name_box">
                  <Link to="">Alice's wallet</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>434.82 USD</h3>
                  <h3>0.00 EUR</h3>
                  <h3>0 JPY</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" onClick={()=>setaccountEditModal(true)}/>
                  </span>
                </div>
              </div>
              <div className="accounts__wallet__box">
                <div className="accounts__wallet__name_box">
                  <Link to="">Bob's wallet</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>372.15 USD</h3>
                  <h3>300.00 EUR</h3>
                  <h3>11,300 JPY</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" onClick={()=>setaccountEditModal(true)} />
                  </span>
                </div>
              </div>
            </>
          )}
          <div className="accounts__box" onClick={() => setAssest(!assest)}>
            <h3>Assest</h3>
            <h3>23,800 USD</h3>
          </div>
          {assest === true && (
            <>
              <div className="accounts__wallet__box">
                <div
                  className="accounts__wallet__name_box"
                  style={{ alignItems: "center" }}
                >
                  <Link to="">Car</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>23,800.00 USD</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" onClick={()=>setaccountEditModal(true)} />
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="accounts__box" onClick={() => setCredit(!credit)}>
            <h3>Credit</h3>
            <h3 style={{ color: "red" }}>-15,808 USD</h3>
          </div>
          {credit === true && (
            <>
              <div
                className="accounts__wallet__box"
                style={{ alignItems: "center" }}
              >
                <div className="accounts__wallet__name_box">
                  <Link to="">Car loan</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3 style={{ color: "red" }}>-15,220.00 USD</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" onClick={()=>setaccountEditModal(true)} />
                  </span>
                </div>
              </div>
              <div className="accounts__wallet__box">
                <div
                  className="accounts__wallet__name_box"
                  style={{ alignItems: "center" }}
                >
                  <Link to="">MasterCard *6803</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>0 JPY</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" onClick={()=>setaccountEditModal(true)} />
                  </span>
                </div>
              </div>
              <div className="accounts__wallet__box">
                <div
                  className="accounts__wallet__name_box"
                  style={{ alignItems: "center" }}
                >
                  <Link to="">Visa *2474</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3 style={{ color: "red" }}>-588.20 USD</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit"  onClick={()=>setaccountEditModal(true)}/>
                  </span>
                </div>
              </div>
            </>
          )}
          <div className="accounts__box" onClick={() => setBank(!bank)}>
            <h3>Bank Account</h3>
            <h3>26,411 USD</h3>
          </div>
          {bank === true && (
            <>
              <div className="accounts__wallet__box">
                <div className="accounts__wallet__name_box">
                  <Link to="">Checking</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>10,089.95 USD</h3>
                  <h3>1,100.00 EUR</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" />
                  </span>
                </div>
              </div>
              <div
                className="accounts__wallet__box"
                style={{ alignItems: "center" }}
              >
                <div className="accounts__wallet__name_box">
                  <Link to="">Savings</Link>
                </div>
                <div className="accounts__wallet__name_box_text">
                  <h3>15,000.00 USD</h3>
                </div>
                <div className="edit_icon_box">
                  <span>
                    <MdOutlineEdit className="icon-edit" />
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <AccounAddModal accountModal={accountModal} setAccountModal={setAccountModal}/>
      <EditMoney accountEditModal={accountEditModal} setaccountEditModal={setaccountEditModal}/>
    </div>
  );
};

export default Accounts;
