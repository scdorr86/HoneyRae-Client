import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { createServiceTicket, createTicket } from "../../data/serviceTicketsData";
import { getEmployees } from "../../data/employeeData";
import { getCustomers } from "../../data/customerData";



const initialState = {
    CustomerId: 0,
    EmployeeId: 0,
    Description: '',
    Emergency: false,
}
export default function CreateTicket() {
    const [formInput, setFormInput] = useState(initialState);
    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);


    useEffect(() => { getEmployees().then(setEmployees); }, []);
    useEffect(() => { getCustomers().then(setCustomers); }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        
        const payload = {
            ...formInput
        };
        createTicket(payload).then(
            setFormInput(initialState)
        );
    };

    return (
       <>
            < h3 > Submit a Ticket</h3 >

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="Customer Id">Customer Id</Label>
                    <Input placeholder="customer Id" type="select" name="CustomerId" value={Number(formInput.CustomerId)} onChange={handleChange}>

                        {customers.map((customer) => {
                            console.log("this is cust", customer)
                            return (
                                <option key={customer.id} value={parseInt(customer.id)}>
                                    ID: {customer.id} Name: {customer.name}
                                </option>                           
                            );
                        })}             
                       
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Employee Id">Employee Id</Label>
                    <Input placeholder="employee Id" type="select" name="EmployeeId" value={formInput.EmployeeId} onChange={handleChange}>

                        {employees.map((employee) => {
                            console.log("this is employee", employee);
                            return (
                                <option key={employee.id} value={employee.id}>{employee.name}</option>                                
                            );
                        })}

                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input placeholder="Description" type="text" name="Description" value={formInput.Description} onChange={handleChange}></Input>
                </FormGroup>

                {/*<FormGroup>*/}
                {/*    <Label check for="Emergency">Emergency</Label>*/}
                {/*    <Input type="checkbox" name="Emergency" value={formInput.Emergency} onChange={handleChange}></Input>*/}
                {/*</FormGroup>*/}

                <FormGroup>
                    <Label for="Emergency">Emergency Id</Label>
                    <Input placeholder="Emergency" type="select" name="Emergency" value={formInput.Emergency} onChange={handleChange}>
                                            
                        <option key="true" value={true} >Yes</option>
                        <option key="false" value={false} >No</option>

                    </Input>
                </FormGroup>

                <Button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</Button>
            </Form>

            

            
        </>
    ); 
}
