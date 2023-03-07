import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Accounts from "./components/accounts/Accounts";
import Reports from "./components/reports/Reports";
import Budget from "./components/budget/Budget";
import Settings from "./components/settings/Settings";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {

 
   let timer1 = setTimeout(() => setLoading(false), 1000);

  
      return () => {
        clearTimeout(timer1);
      };
  
  }, [])







  return (
    <BrowserRouter>
      <div className="main_container">
       {loading ?<Loader/>
       :
       <>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="transactions" element={<Transactions />}></Route>
            <Route path="accounts" element={<Accounts />}></Route>
            <Route path="reports" element={<Reports />}></Route>
            <Route path="budget" element={<Budget />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </div>
        <Sidebar />
        </>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
