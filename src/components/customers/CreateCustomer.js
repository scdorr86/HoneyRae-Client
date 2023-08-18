import { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { createCustomer } from "../../data/customerData";


const initialState = {
    name: '',
    address: '',
}
export default function CreateCustomer() {
    const [formInput, setFormInput] = useState(initialState);

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
        createCustomer(payload).then(
            setFormInput(initialState)
        );
    };

    return (
        <>
            < h3 > Create Customer</h3 >

            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input placeholder="Customer Name" type="text" name="name" value={formInput.name} onChange={handleChange}></Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input placeholder="Customer Address" type="text" name="address" value={formInput.address} onChange={handleChange}></Input>
                </FormGroup>

                <Button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</Button>
            </Form>

        </>
    );
}
