import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { createServiceTicket, createTicket } from "../../data/serviceTicketsData";
import { getEmployees } from "../../data/employeeData";
import { getCustomers } from "../../data/customerData";



const initialState = {
    customerId: 0,
    employeeId: 0,
    description: '',
    emergency: false,
}
export default function CreateTicket() {
    const [formInput, setFormInput] = useState(initialState);
    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);


    useEffect(() => { getEmployees().then(setEmployees); }, []);
    useEffect(() => { getCustomers().then(setCustomers); }, []);


    const handleChange = (e) => {
        let { name, value } = e.target;
        if (value === "true")
            value = true
        if (value === "false")
            value = false
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
            < h3 > Submit a Ticket</h3 >

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="Customer Id">Customer Id</Label>
                    <Input placeholder="customer Id" type="select" name="customerId" value={formInput.customerId} onChange={handleChange}>

                        <option value="customer">Customer</option>
                        {customers.map((customer) => {
                            console.log("this is cust", customer)
                            return (
                                <option key={customer.id} value={+customer.id}>
                                    ID: {customer.id} Name: {customer.name}
                                </option>                           
                            );
                        })}             
                       
                    </Input>
                </FormGroup>

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

                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input placeholder="Description" type="text" name="description" value={formInput.description} onChange={handleChange}></Input>
                </FormGroup>

                {/*<FormGroup>*/}
                {/*    <Label check for="Emergency">Emergency</Label>*/}
                {/*    <Input type="checkbox" name="Emergency" value={formInput.Emergency} onChange={handleChange}></Input>*/}
                {/*</FormGroup>*/}

                <FormGroup>
                    <Label for="Emergency">Emergency Id</Label>
                    <Input placeholder="Emergency" type="select" name="emergency" value={formInput.emergency} onChange={handleChange}>

                        <option value="Emergency" >Emergency</option>
                        <option value={false} >No</option>
                        <option value={true} >Yes</option>

                    </Input>
                </FormGroup>

                <Button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</Button>
            </Form>

            

            
        </>
    ); 
}
