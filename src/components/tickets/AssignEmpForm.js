import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { getServiceTicketById, updateTicket } from "../../data/serviceTicketsData";
import { getEmployees } from "../../data/employeeData";
import { useParams } from "react-router-dom";

const initialState = {
    employeeId: 0,
}
export default function AssignEmpToTick() {
    const { id } = useParams();

    const [formInput, setFormInput] = useState(initialState);
    const [employees, setEmployees] = useState([]);
    const [ticket, setTicket] = useState({});

    const getTicket = () => {
        getServiceTicketById(id).then(setTicket);
    };

    useEffect(() => { getEmployees().then(setEmployees); }, []);
    useEffect(() => { getTicket(); }, [id]);

    console.log("testing the value of ticket obj", ticket);
   
    const handleChange = (e) => {  
        const { name, value } = e.target;
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ticket.employeeId=formInput.employeeId
        const payload = {
            ...ticket
        };
        updateTicket(id, payload).then(
            setFormInput(initialState)
        );
    };

    return (
        <>
            < h3 > Assign Employee </h3 >

            <Form onSubmit={handleSubmit}>
                
                <FormGroup>
                    <Label for="Employee Id">Employee Id</Label>
                    <Input placeholder="employee Id" type="select" name="employeeId" value={formInput.employeeId} onChange={handleChange}>

                        <option value="Employee">Employee</option>
                        {employees.map((employee) => {
                            console.log("this is employee", employee);
                            return (
                                <option key={employee.id} value={employee.id}>{employee.name}</option>
                            );
                        })}

                    </Input>
                </FormGroup>

                <Button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</Button>
            </Form>

        </>
    );
}