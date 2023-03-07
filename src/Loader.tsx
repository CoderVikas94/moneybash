import React from 'react'
import "./App.css";
import ReactLoading from "react-loading";


const Loader = () => {
  return (
    <div className='loader-box'>
         <ReactLoading type={"spin"} color="gray" height={35}  width={35} />
    </div>
  )
}

export default Loader