
import { deleteServiceTicket } from "../../data/serviceTicketsData";
import { Button } from "reactstrap";

export function DeleteTicket({ ticketObj, setTickets }) {
    const deleteThisTicket = () => {
        if (window.confirm(`Delete ${ticketObj.description}?`)) {
            deleteServiceTicket(ticketObj.id).then((data) => setTickets(data));
        }
    };
        return (
            <Button className="margin-left btn-sm" onClick={deleteThisTicket}>Delete</Button>
    )
}