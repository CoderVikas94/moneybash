import { useState } from "react";
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

function App() {
  return (
    <BrowserRouter>
      <div className="main_container">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
