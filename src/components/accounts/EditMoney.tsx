import React from 'react'
import { Modal ,Select,SelectProps} from "antd";
import "./accounts.css";
import {AiOutlineFile} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import { letterSpacing } from '@mui/system';

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
    <span style={{textAlign:"end",color:"#21ba45",letterSpacing:'0.1rem',fontFamily: 'Roboto Mono'
}}>428.82 USD</span>
    <span style={{textAlign:"end",color:"#21ba45",letterSpacing:'0.1rem',fontFamily: 'Roboto Mono'}}>0.00 EUR</span>
    <span style={{textAlign:"end",color:"#21ba45",letterSpacing:'0.1rem',marginBottom:"1rem",fontFamily: 'Roboto Mono'}}>0 JPY</span>
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