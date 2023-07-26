import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from "../../data/employeeData";

export default function EmployeeDetails() {
    const { id } = useParams();

    const [employee, setEmployee] = useState(null);

    //add useEffect here to get the ticket details from the API
    const getEmployee = () => {
        getEmployeeById(id).then(setEmployee);
    };

    useEffect(() => { getEmployee(); }, [id]);

    if (!employee) {
        return null;
    }

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Employee Name</th>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Employee Specialty</th>
                        <td>{employee.specialty}</td>
                    </tr>
                </tbody>
            </Table>
            <h6>Employee Ticket Info</h6>
            {employee.serviceTickets.map((t) => (
               <>
                <h6>{`Ticket-${t.id}`}</h6>
                    <ul>
                        <li>{`Customer Ticket ${t.id}`}</li>
                        <li>{`Description- ${t.description}`}</li>
                        <li>{`Emergency-${t.emergency ? "yes" : "no"}`}</li>
                        <li>{`Completed-${t.dateCompleted?.split("T")[0] || "Incomplete"}`}</li>
                    </ul >
                </>
            ))}

        </>
    );
}