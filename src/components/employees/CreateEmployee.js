import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { createEmployee, getEmployees } from "../../data/employeeData";
// import { getCustomers } from "../../data/customerData";



const initialState = {
    name: '',
    specialty: '',
}
export default function CreateEmployee() {
    const [formInput, setFormInput] = useState(initialState);
   


    //useEffect(() => { getEmployees().then(setEmployees); }, []);
    //useEffect(() => { getCustomers().then(setCustomers); }, []);


    const handleChange = (e) => {

        let { name, value } = e.target;

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
        createEmployee(payload).then(
            setFormInput(initialState)
        );
    };

    return (
        <>
            < h3 > Create Employee</h3 >

            <Form onSubmit={handleSubmit}>
                
                <FormGroup>
                    <Label for="Specialty">Specialty</Label>
                    <Input placeholder="Specialty" type="text" name="specialty" value={formInput.specialty} onChange={handleChange}></Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Employee Name">Name</Label>
                    <Input placeholder="Employee Name" type="text" name="name" value={formInput.name} onChange={handleChange}></Input>
                </FormGroup>

                <Button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</Button>
            </Form>

        </>
    );
}
