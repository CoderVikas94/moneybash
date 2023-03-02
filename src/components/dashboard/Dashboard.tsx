import Demo from "../demo/Demo";
import "./dashboard.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { color } from "@mui/system";
import Editdash from "./Editdash";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [cash, setCash] = useState(false);
  const [bank, setBank] = useState(false);
  const [credit, setCredit] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [recent, setRecent] = useState(false);
  const [expense, setExpense] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [income, setIncome] = useState(false);
  const [active, setActive] = useState("black");
  const [Tactive, setTActive] = useState("black");
  const [modalOpen, setModalOpen] = useState(false);


  const options: SelectProps["options"] = [
    {
      value: `Alice's Wallet`,
      label: <div className="label"><p>Alice's Wallet</p><p>Cash</p></div>,
    }, {
      value: `Bob's wallet`,
      label: <div className="label"><p>Bob's wallet</p><p>Cash</p></div>,
    },
    {
      value: `Car`,
      label: <div className="label"><p>Car</p><p>Asset</p></div>,
    },
    {
      value: `Car loan`,
      label: <div className="label"><p>Car loan</p><p>Credit</p></div>,
    },
    {
      value: `MasterCard *6803`,
      label: <div className="label"><p>MasterCard *6803</p><p>Credit</p></div>,
    },
    {
      value: `Visa *2474`,
      label: <div className="label"><p>Visa *2474</p><p>Credit</p></div>,
    },
    {
      value: `Checking`,
      label: <div className="label"><p>Checking</p><p>Bank Account</p></div>,
    },
    {
      value: `Savings`,
      label: <div className="label"><p>Savings</p><p>Bank Account</p></div>,
    }
  ];

 

  const optionscurrency: SelectProps["options"] = [
    {
      value: `USD`,
      label: `USD`,
    },{
      value: `EUR`,
      label: `EUR`,
    }
    ,{
      value: `JPY`,
      label: `JPY`,
    }

  ];

  const optionTags: SelectProps["options"] = [
    {
      value: `Groceries`,
      label: `Groceries`,
    },{
      value: `Restaurant`,
      label: `Restaurant`,
    }
    ,{
      value: `Rent`,
      label: `Rent`,
    },{
      value: `Income Tax`,
      label: `Income Tax`,
    },{
      value: `Social security`,
      label: `Social security`,
    },{
      value: `Utilities`,
      label: `Utilities`,
    },{
      value: `Food`,
      label: `Food`,
    }

  ];




  // {
  //   optionscurrency.push();
  // }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
              <span
                onClick={() => {
                  setTransaction(!transaction);
                  setExpense(true);
                  setActive("red");
                }}
              >
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
                      <span
                        onClick={() => {
                          setExpense(true);
                          setTransfer(false);
                          setIncome(false);
                          setActive("red");
                          setTActive("black");
                        }}
                        style={{ color: active }}
                        className={`nettransaction ${expense===true?"net-trans-active":""}`}
                      >
                        Expense
                      </span>
                      <span
                        onClick={() => {
                          setTransfer(true);
                          setExpense(false);
                          setIncome(false);
                          setActive("black");
                          setTActive("black");
                        }}
                        className={`nettransaction ${transfer===true?"net-trans-active":""}`}

                      >
                        Transfer
                      </span>
                      <span
                        onClick={() => {
                          setIncome(true);
                          setExpense(false);
                          setTransfer(false);
                          setActive("black");
                          setTActive("green");
                        }}
                        style={{ color: Tactive }}

                        className={`nettransaction ${income===true?"net-trans-active":""}`}

                      >
                        Income
                      </span>
                    </div>
                    {expense === true && transaction === true && (
                      <>
                        <div className="transaction__box__table_form">
                          <div className="from__box">
                            <label>From</label>
                            <Select
                              size={"large"}
                              defaultValue="Alice's wallet"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                              }}
                              options={options}
                              className="from_label"
                            />
                          </div>
                          <div className="currency__box">
                            <input
                              id="currency"
                              type={"number"}
                              step="0.01"
                              min="0"
                              max="10"
                              placeholder="0.03"
                            />
                            <Select
                              size={"large"}
                              defaultValue="USD"
                              onChange={handleChange}
                              style={{ width: "40%" }}
                              options={optionscurrency}
                              className="currency"
                            />
                          </div>
                        </div>
                        <div className="choose__box">
                          <div className="choose__box_tags">
                            <label>Tags</label>
                            <Select
                              mode="multiple"

                              size={"large"}
                              placeholder="Choose existing tags or add new"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                                color: "rgba(0, 0, 0, 0.15)",
                              }}
                              options={optionTags}
                              className="choose_label"
                            />
                          </div>
                          <input type={"date"} value="2023-03-02" />
                        </div>
                        <div className="note__box">
                          <input type={"text"} placeholder={"Note"} />
                          <button>Add Expense</button>
                        </div>
                      </>
                    )}
                    {transfer === true && (
                      <>
                        <div className="transaction__box__table_form">
                          <div className="from__box">
                            <label>From</label>
                            <Select
                              size={"large"}
                              defaultValue="Alice's wallet"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                              }}
                              options={options}
                              className="from_label"
                            />
                          </div>
                          <div className="currency__box">
                            <input
                              id="currency"
                              type={"number"}
                              step="0.01"
                              min="0"
                              max="10"
                              placeholder="0.03"
                            />
                            <Select
                              size={"large"}
                              defaultValue="USD"
                              onChange={handleChange}
                              style={{ width: "40%" }}
                              options={optionscurrency}
                              className="currency"
                            />
                          </div>
                        </div>
                        <div className="choose__box">
                          <div className="choose__box_tags">
                            <label>To</label>
                            <Select
                              size={"large"}
                              defaultValue="Bob's Wallet"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                                color: "rgba(0, 0, 0, 0.15)",
                              }}
                              options={options}
                              className="choose_label"
                            />
                          </div>
                          <div className="currency__box">
                            <input
                              id="currency"
                              type={"number"}
                              step="0.01"
                              min="0"
                              max="10"
                              placeholder="0.03"
                            />
                            <Select
                              size={"large"}
                              defaultValue="USD"
                              onChange={handleChange}
                              style={{ width: "40%" }}
                              options={optionscurrency}
                              className="currency"
                            />
                          </div>
                        </div>
                        <div className="note__box">
                          <input
                            type={"text"}
                            placeholder={"Note"}
                            style={{ flexBasis: "53%" }}
                          />
                          <input
                            type={"date"}
                            value="2023-03-02"
                            style={{ flexBasis: "30%" }}
                          />
                        </div>
                        <div className="transfer__btn_box">
                          <button>Add Expense</button>
                        </div>
                      </>
                    )}
                    {income === true && (
                      <>
                        <div className="transaction__box__table_form">
                          <div className="from__box">
                            <label>To</label>
                            <Select
                              size={"large"}
                              defaultValue="Alice's wallet"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                              }}
                              options={options}
                              className="from_label"
                            />
                          </div>
                          <div className="currency__box">
                            <input
                              id="currency"
                              type={"number"}
                              step="0.01"
                              min="0"
                              max="10"
                              placeholder="0.03"
                            />
                            <Select
                              size={"large"}
                              defaultValue="USD"
                              onChange={handleChange}
                              style={{ width: "40%" }}
                              options={optionscurrency}
                              className="currency"
                            />
                          </div>
                        </div>
                        <div className="choose__box">
                          <div className="choose__box_tags">
                            <label>Tags</label>
                            <Select
                              size={"large"}
                              mode="multiple"
                              placeholder="Choose existing tags or add new"
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                marginTop: "0.3rem",
                                borderRadius: "0.01rem",
                                color: "rgba(0, 0, 0, 0.15)",
                              }}
                              options={optionTags}
                              className="choose_label"
                            />
                          </div>
                          <input type={"date"} value="2023-03-02" />
                        </div>
                        <div className="note__box">
                          <input type={"text"} placeholder={"Note"} />
                          <button>Add Expense</button>
                        </div>
                      </>
                    )}
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
                <div className="recent__box_table_box">
                  <div className="recent__text__box">
                    <div className="recent__text__box_name">
                      <span>28 Feb</span>
                      <span> Alice's wallet </span>
                    </div>
                    <div className="recent__text__box_money">
                      <p>6.00 USD</p>
                      <span>
                        <MdOutlineEdit className="icon-edit" onClick={()=>setModalOpen(true)} />
                      </span>
                    </div>
                  </div>
                  <div className="recent__text__box">
                    <div className="recent__text__box_name">
                      <span>01 May</span>
                      <span>Checking</span>
                      <span>
                        <FaArrowRight />
                      </span>
                      <span>Visa *2474</span>
                     <span>credit card payment</span>
                    </div>
                    <div className="recent__text__box_money">
                      <p  style={{color:"gray"}}>588.20 USD</p>
                      <span>
                        <MdOutlineEdit className="icon-edit" onClick={()=>setModalOpen(true)} />
                      </span>
                    </div>
                  </div>
                  <div className="recent__text__box">
                    <div className="recent__text__box_name">
                    <span>30 Apr</span>
                      <span>Checking</span>
                      <span>
                        <FaArrowRight />
                      </span>
                      <span>Savings</span>
                    </div>
                    <div className="recent__text__box_money">
                      <p style={{color:"gray"}}>1,000.00 USD</p>
                      <span>
                        <MdOutlineEdit className="icon-edit"  onClick={()=>setModalOpen(true)}/>
                      </span>
                    </div>
                  </div>
                  <div className="recent__text__box">
                    <div className="recent__text__box_name">
                    <span>30 Apr</span>
                      <span>Checking</span>
                      <span>
                        <FaArrowRight />
                      </span>
                      <button>Social security</button>
                    </div>
                    <div className="recent__text__box_money">
                      <p style={{color:"red"}}>-540.00 USD</p>
                      <span onClick={()=>setModalOpen(true)}>
                        <MdOutlineEdit className="icon-edit" onClick={()=>setModalOpen(true)} />
                      </span>
                    </div>
                  </div>
                  <div className="recent__text__box">
                    <div className="recent__text__box_name">
                    <span>30 Apr</span>
                      <span>Checking</span>
                      <span>
                        <FaArrowRight />
                      </span>
                      <button>Income Tax</button>
                    </div>
                    <div className="recent__text__box_money">
                      <p style={{color:"red"}}>-940.00 USD</p>
                      <span>
                        <MdOutlineEdit className="icon-edit" onClick={()=>setModalOpen(true)} />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Editdash modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default Dashboard;
