import {useState,useEffect,useRef} from 'react'
import Demo from '../demo/Demo'
import './reports.css'
import {MdArrowForwardIos} from "react-icons/md"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Select, SelectProps } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Charts } from './Charts';





const Reports = () => {
  const [drop, setDrop] = useState(false);
  const [selectExp, setselectExp] = useState("Expnese & Income");
  const [changeYear, setchangeYear] = useState(2023);


   const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
   const Chartoptions = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  

  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };


  const wraRef:any = useRef(null);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);




  const handleClickOutside = (event:any) => {
    if (wraRef.current && !wraRef.current.contains(event.target)) {
      if( event.target.className === "expense-btn"){
      }else{
        setDrop(false);
      }
    }
  };


  const handleSpan =(e:any)=>{
    setselectExp(e.target.innerText)
    setDrop(false);


  }

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





  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };





  return (
    <div className='dashboard__box'>
    <Demo/>
    <div className='reports__box_content'>
    <div className="transaction__top__box">
        <button className="expense-btn" onClick={()=>setDrop(!drop)}>{selectExp}<MdOutlineArrowDropDown style={{marginLeft:"0.5rem",fontSize:"1rem",color:"black"}}/></button>
          <span className="icon-backward_span" onClick={()=>setchangeYear(changeYear-1)}>
          <MdArrowForwardIos style={{ color:"rgba(0, 0, 0, 0.5)",transform:"rotate(-180deg)"}}  />
          </span>
          <button className="new-btn">{changeYear}</button>
          <span className="icon-filter-span" onClick={()=>setchangeYear(changeYear+1)}>
            <MdArrowForwardIos style={{color:"rgba(0, 0, 0, 0.5)"}} />
          </span>
          {drop===true &&
          <>
          <div className="drop__down_expense" ref={wraRef}>
            <span onClick={handleSpan}>Expnese & Income</span>
            <span onClick={handleSpan}>Expense by Tags</span>
            <span onClick={handleSpan}>Net Income</span>
            <span onClick={handleSpan}>Net Worth</span>
          </div>
          </>
          }
        </div>
<div className='chart__data__box'>
  <div className='currency__data'>
    <span>0 USD</span>
    <span>TOTAL INCOME</span>
  </div>
  <div className='currency__data'>
    <span>0 USD</span>
    <span>TOTAL EXPENSE</span>
  </div>
</div>
<Charts/>

<div className='reports__select__box'>
<Select
                        mode="multiple"
                       size={"large"}
                      defaultValue="Specify accounts"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        borderRadius: "0.01rem",
                        marginTop: "1rem",

                      }}
                      showArrow={true}

                      options={options}
                      className="report__filter_label"
                    />
                     <Select
                        mode="multiple"
                       size={"large"}
                      defaultValue="Exclude tags"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        marginTop: "1rem",
                        borderRadius: "0.01rem",
                      }}
                      showArrow={true}

                      options={optionTags}
                      className="report__filter_label"
                    />

</div>
      </div>
    </div>
  )
}

export default Reports