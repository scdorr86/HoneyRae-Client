import { Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
export function AssignEmployee({ ticketObj }) {
    const { id } = useParams();

    if (ticketObj.employee?.name)
        return (
            <tr>
                <td>{ticketObj.employee?.name}</td>
            </tr>
            
        )
    else {
        return (
            <Link to={`/tickets/assign/${id}`}> <Button className="margin-left btn-sm" >Assign Employee</Button></Link>
        )
    };
}