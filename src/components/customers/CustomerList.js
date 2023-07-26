import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCustomers } from "../../data/customerData";
import { Link } from "react-router-dom";

export default function TicketsList() {
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
                    <tr key={`Customer-${t.id}`}>
                        <th scope="row">{t.id}</th>
                        <td>{t.Name}</td>
                        <td>{t.Address}</td>

                        <td>
                            <Link to={`${t.id}`}>Details</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
