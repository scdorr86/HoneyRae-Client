import { Button } from "reactstrap";
export function AssignEmployee({ ticketObj }) {
    

    if (ticketObj.employee?.name)
        return (
            <tr>
                <td>{ticketObj.employee?.name}</td>
            </tr>
            
        )
    else {
        return (
            <Button className="margin-left btn-sm" >Assign Employee</Button>
        )
    };
}