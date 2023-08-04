
import { completeServiceTicket, completeTicket } from "../../data/serviceTicketsData";
import { Button } from "reactstrap";

export function CompleteTicket({ ticketObj, setTickets }) {
    const CompleteThisTicket = () => {
        if (window.confirm(`Complete ${ticketObj.description}?`)) {
            ticketObj.DateCompleted = new Date()
            completeTicket(ticketObj).then((data) => setTickets(data));
        }
    };
    console.log("ticket object from ticket list map", ticketObj);
    if (ticketObj.employeeId !== 0 && ticketObj.dateCompleted === "0001-01-01T00:00:00")
     return (
            <Button className="margin-left btn-sm" onClick={CompleteThisTicket}>Complete</Button>
        )
    else {return (<div></div>) } ;
}

//&& ticketObj.DateCompleted === new Date(0001,01, 01) ticketObj.EmployeeId !== 0 || ticketObj.EmployeeId !== "Unassigned"