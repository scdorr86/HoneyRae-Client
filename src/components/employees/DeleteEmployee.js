import { Button } from "reactstrap";
import { deleteEmployee } from "../../data/employeeData";

export function DeleteEmployee({ employeeObj, setEmployees }) {

    const deleteThisEmployee = () => {

        if (window.confirm(`Delete ${employeeObj.name}?`)) {
            deleteEmployee(employeeObj.id).then((data) => setEmployees(data));
        }
    };

    return (
        <Button className="margin-left btn-sm" onClick={deleteThisEmployee}>Delete</Button>
    )
}