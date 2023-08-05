import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export function AssignEmployee({ ticketObj }) {
    

    if (ticketObj.employee?.name)
        return (
            <tr>
                <td>{ticketObj.employee?.name}</td>
            </tr>
            
        )
    else {
        return (
            <Link to="/tickets/assign"> <Button className="margin-left btn-sm" >Assign Employee</Button></Link>
        )
    };
}