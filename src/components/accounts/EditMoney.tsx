import React from 'react'
import { Modal ,Select,SelectProps} from "antd";
import "./accounts.css";
import {AiOutlineFile} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'

const EditMoney = ({accountEditModal,setaccountEditModal}:any) => {

    const options =  [
        { value: 'Cash', label: 'Cash' },
        { value: 'Bank Account', label: 'Bank Account' },
        { value: 'Deposit', label: 'Deposit' },
        { value: 'Credit', label: 'Credit' },
        { value: 'Assest', label: 'Assest' },
       
      ]

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };


  return (
    <>
    <Modal
      centered
      open={accountEditModal}
      onOk={() => setaccountEditModal(false)}
      onCancel={() => setaccountEditModal(false)}
      footer={null}
      className="account__modal"
      closable={false}
      width={"50%"}

    >
      <div className="account__modal_edit__box">
        <div className="account__modal__edit__text">
          <AiOutlineFile className="icon-file" />
          <p>New Account</p>
          <ImCross className="close-X" onClick={()=>setaccountEditModal(false)}/>
        </div>
        <div className='form__group__box'>
            <div className='name__currency__box'>
                <label htmlFor="name"><p>Names<sup style={{color:"red"}}>*</sup></p>
                    <input placeholder='Account name' type={"text"}/>
                </label>
                <span><input type={"checkbox"} checked/>US dollar</span>
                <span><input type={"checkbox"} />Euro</span>
                <span><input type={"checkbox"} />Japanese Yen</span>
                <span><input type={"checkbox"} checked/>Show on Dashboard</span>

            </div>
            <div className='cash__group__box'>
            <label htmlFor="select">Group<Select
      defaultValue="Cash"
      style={{ width: "100%" }}
      onChange={handleChange}
      options={options}
      className="account__modal__box"
      size={"large"}

    /></label>
    <span><input placeholder='Balance' type={"number"}/><button>USD</button></span>
    <span><input placeholder='Balance' type={"number"}/><button>EUR</button></span>
    <span><input placeholder='Balance' type={"number"}/><button>JPY</button></span>
    <button>Save Account</button>

            </div>

        </div>
        <div className='account__blank__div'>

        </div>
        </div>
          

          </Modal>
          </>
  )
}

export default EditMoney