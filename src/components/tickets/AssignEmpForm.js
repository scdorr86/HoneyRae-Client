import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { createTicket } from "../../data/serviceTicketsData";
import { getEmployees } from "../../data/employeeData";


const initialState = {
    employeeId: 0,
}
export default function AssignEmpToTick() {
    const [formInput, setFormInput] = useState(initialState);
    const [employees, setEmployees] = useState([]);


    useEffect(() => { getEmployees().then(setEmployees); }, []);
   
    const handleChange = (e) => {  
        const { name, value } = e.target;
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...formInput
        };
        createTicket(payload).then(
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