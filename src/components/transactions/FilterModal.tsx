import React from 'react'
import { Modal ,Select,SelectProps} from "antd";
import "./transactions.css";
import {AiOutlineFile} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'





const FilterModal = ({setmodalFilter,modalFilter}:any) => {

    
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





  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };



    
  return (
    <>
      <Modal
        centered
        open={modalFilter}
        onOk={() => setmodalFilter(false)}
        onCancel={() => setmodalFilter(false)}
        footer={null}
        className="filter__modal"
        closable={false}
        width={"40%"}

      >
        <div className="edit__box">
          <div className="edit__text">
            <AiOutlineFile className="icon-file" />
            <p>Filter transactions</p>
            <ImCross className="close-X" onClick={()=>setmodalFilter(false)}/>
          </div>
          <div className="filter__box__table_form">
             <div className="filter__from__box">
                    <label>Account</label>
                    <Select
                        mode="multiple"
                       size={"large"}
                      defaultValue="Checking"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        marginTop: "0.3rem",
                        borderRadius: "0.01rem",
                      }}
                      showArrow={true}

                      options={options}
                      className="filter_label"
                    />
                  </div>
                  <div className="filter__from__box">
                    <label>Tags</label>
                    <Select
                        mode="multiple"
                       size={"large"}
                      defaultValue="Checking"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        marginTop: "0.3rem",
                        borderRadius: "0.01rem",
                      }}
                      showArrow={true}

                      options={optionTags}
                      className="filter_label"
                    />
                  </div>
                  <div className="filter-model-box">
                  <button>Reset</button>
                  <button>Apply</button>
                </div>
                  </div>

          </div>
          

      </Modal>
    </>
  )
}

export default FilterModal