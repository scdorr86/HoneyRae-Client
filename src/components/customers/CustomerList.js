import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCustomers } from "../../data/customerData";
import { Link } from "react-router-dom";
import { DeleteCustomer } from "./DeleteCustomer";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers().then(setCustomers);
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {customers.map((c) => (
                    <tr key={`Customer-${c.id}`}>
                        <th scope="row">{c.id}</th>
                        <td>{c.name}</td>
                        <td>{c.address}</td>

                        <td>
                            <Link to={`${c.id}`}>Details</Link>
                        </td>
                        <td>
                            <DeleteCustomer customerObj={c} setCustomers={setCustomers}></DeleteCustomer>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
