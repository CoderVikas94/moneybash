import {HiCurrencyDollar} from "react-icons/hi"
import {BiRefresh} from "react-icons/bi"
import '../../App.css'
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [rotate, setRotate] = useState(false)
  const location = useLocation();

  return (
    <div className='header__box'>
      <div className="header__text__box">
        <HiCurrencyDollar className="dollar_sign"/>
     <h1 style={{ textTransform: "capitalize"}}>{location.pathname=="/"?"Dashboard":location.pathname.slice(1)}</h1>
     </div>
     <BiRefresh  className={`refresh_sign ${rotate===true?"rotate":""}`} onClick={()=>setRotate(!rotate)}/>
      </div>
  )
}

export default Header