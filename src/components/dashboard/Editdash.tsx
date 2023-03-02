import React, { useState } from "react";
import { Modal } from "antd";
import "./dashboard.css";
import { AiOutlineFile } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { Select } from "antd";
import type { SelectProps } from "antd";

const Editdash = ({ modalOpen, setModalOpen }: any) => {

 
  const [expense, setExpense] = useState(true);
  const [transfer, setTransfer] = useState(false);
  const [income, setIncome] = useState(false);
  const [active, setActive] = useState("red");
  const [Tactive, setTActive] = useState("black");

  const options: SelectProps["options"] = [
    {
      value: `Alice's Wallet`,
      label: (
        <div className="label">
          <p>Alice's Wallet</p>
          <p>Cash</p>
        </div>
      ),
    },
    {
      value: `Bob's wallet`,
      label: (
        <div className="label">
          <p>Bob's wallet</p>
          <p>Cash</p>
        </div>
      ),
    },
    {
      value: `Car`,
      label: (
        <div className="label">
          <p>Car</p>
          <p>Asset</p>
        </div>
      ),
    },
    {
      value: `Car loan`,
      label: (
        <div className="label">
          <p>Car loan</p>
          <p>Credit</p>
        </div>
      ),
    },
    {
      value: `MasterCard *6803`,
      label: (
        <div className="label">
          <p>MasterCard *6803</p>
          <p>Credit</p>
        </div>
      ),
    },
    {
      value: `Visa *2474`,
      label: (
        <div className="label">
          <p>Visa *2474</p>
          <p>Credit</p>
        </div>
      ),
    },
    {
      value: `Checking`,
      label: (
        <div className="label">
          <p>Checking</p>
          <p>Bank Account</p>
        </div>
      ),
    },
    {
      value: `Savings`,
      label: (
        <div className="label">
          <p>Savings</p>
          <p>Bank Account</p>
        </div>
      ),
    },
  ];

  const optionscurrency: SelectProps["options"] = [
    {
      value: `USD`,
      label: `USD`,
    },
    {
      value: `EUR`,
      label: `EUR`,
    },
    {
      value: `JPY`,
      label: `JPY`,
    },
  ];

  const optionTags: SelectProps["options"] = [
    {
      value: `Groceries`,
      label: `Groceries`,
    },
    {
      value: `Restaurant`,
      label: `Restaurant`,
    },
    {
      value: `Rent`,
      label: `Rent`,
    },
    {
      value: `Income Tax`,
      label: `Income Tax`,
    },
    {
      value: `Social security`,
      label: `Social security`,
    },
    {
      value: `Utilities`,
      label: `Utilities`,
    },
    {
      value: `Food`,
      label: `Food`,
    },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        className="edit__modal"
        closable={false}
        width={"50%"}

      >
        <div className="edit__box">
          <div className="edit__text">
            <AiOutlineFile className="icon-file" />
            <p>Edit Transaction</p>
            <ImCross className="close-X" onClick={()=>setModalOpen(false)}/>
          </div>
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
                style={{display:"none"}}
                
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
            {expense === true && (
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
                  <button>Save Expense</button>
                </div>
              </>
            )}
             {income === true && (
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
                  <button>Save Income</button>
                </div>
              </>
            )}

          </div>
          <div className="modal-del-box">
            <button>Delete<MdDelete style={{fontSize:"1.3rem"}}/></button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Editdash;
