import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CreateTicket from "./components/tickets/CreateTicket";
import Customers from './components/customers/Customers';
import CustomerList from './components/customers/CustomerList';
import CustomerDetails from './components/customers/CustomerDetails';
import EmployeeList from './components/employees/EmployeeList';
import Employees from './components/employees/Employees';
import EmployeeDetails from './components/employees/EmployeeDetails';
import AssignEmpToTick from './components/tickets/AssignEmpForm';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="tickets" element={<ServiceTickets />}>
            <Route index element={<TicketsList />} />
            <Route path=":id" element={<TicketDetails />} />
            <Route path="create" element={<CreateTicket />} />
            <Route path="assign" element={<AssignEmpToTick />} />
          </Route>

          <Route path="customers" element={<Customers />}>
             <Route index element={<CustomerList />} />
             <Route path=":id" element={<CustomerDetails />} />
             <Route path="create" element={<CreateTicket />} />
          </Route>

          <Route path="employees" element={<Employees />}>
                <Route index element={<EmployeeList />} />
                <Route path=":id" element={<EmployeeDetails />} />
                <Route path="create" element={<CreateTicket />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
