import React, { useState ,useRef,useEffect} from "react";
import Demo from "../demo/Demo";
import "./transactions.css";
import { ImPlus } from "react-icons/im";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Edittransactions from "./Edittransactions";
import FilterModal from "./FilterModal";


const Transactions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFilter, setmodalFilter] = useState(false);
  const [drop, setDrop] = useState(false);


  const wrapperRef:any = useRef(null);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);


  const handleClickOutside = (event:any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if( event.target.className === "date-btn" || event.target.className === "icon-calender" ){
      }else{
        setDrop(false);
      }
    }
  };





  

  const handleSpan =(e:any)=>{
    console.log("e",e.target.innerText)
    setDrop(false);


  }

  return (
    <div className="dashboard__box">
      <Demo />
      <div className="transaction__box_content">
        <div className="transaction__top__box">
          <span className="icon-plus_span" onClick={()=>setModalOpen(true)}>
            <ImPlus style={{ color:"rgba(0, 0, 0, 0.5)"}} />
          </span>
          <button className="new-btn">New</button>
          <span className="icon-calender" onClick={()=>setDrop(!drop)}>
            <BsFillCalendarFill style={{ color:"rgba(0, 0, 0, 0.5)"}} />
          </span>
          <button className="date-btn" onClick={()=>setDrop(!drop)}>24 Feb -- 03 Mar</button>
          <span className="icon-filter-span"  onClick={() => setmodalFilter(true)}>
            <FaFilter style={{color:"rgba(0, 0, 0, 0.5)"}} />
          </span>
          {drop===true &&
          <>
          <div className="drop__down_calender" ref={wrapperRef}>
            <span onClick={handleSpan}>Today</span>
            <span onClick={handleSpan}>Yesterday</span>
            <span onClick={handleSpan}>Last 7 days</span>
            <span onClick={handleSpan}>Last 30 days</span>
            <span onClick={handleSpan}>This month</span>
            <span onClick={handleSpan}>Custom date</span>
          </div>
          </>
          }
        </div>
        <div className="transaction__transaction__box">
        <span>No transactions found.</span>
        </div>
        <div className="transaction__income__box">
          <div className="blank__div">

          </div>
          <div className="transaction__income__container">
          <div className="total__income__box">
            <p>Total income</p>
            <p>0.00 USD</p>
          </div>
          <div className="total__income__box">
            <p>Total expense</p>
            <p>0.00 USD</p>
          </div>
          <div className="total__income__box">
            <p></p>
            <p>0.00 USD</p>
          </div>
          </div>
        </div>
      </div>
      <Edittransactions modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <FilterModal modalFilter={modalFilter} setmodalFilter={setmodalFilter}/>

    </div>
  );
};

export default Transactions;
