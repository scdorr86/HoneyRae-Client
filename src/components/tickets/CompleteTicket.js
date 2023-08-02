
import { completeServiceTicket, completeTicket } from "../../data/serviceTicketsData";
import { Button } from "reactstrap";

export function CompleteTicket({ ticketObj, setTickets }) {
    const CompleteThisTicket = () => {
        if (window.confirm(`Complete ${ticketObj.description}?`)) {
            ticketObj.DateCompleted = new Date()
            completeTicket(ticketObj).then((data) => setTickets(data));
        }
    };

    if (ticketObj.EmployeeId !== 0 || ticketObj.EmployeeId !== "Unassigned")
        return (
            <Button className="margin-left btn-sm" onClick={CompleteThisTicket}>Complete</Button>
        )
    else {return (<div></div>) } ;
}