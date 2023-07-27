import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customerData";

export default function CustomerDetails() {
    const { id } = useParams();

    const [customer, setCustomer] = useState(null);

    //add useEffect here to get the ticket details from the API
    const getCustomer = () => {
        getCustomerById(id).then(setCustomer);
    };

    useEffect(() => { getCustomer(); }, [id]); 

    if (!customer) {
        return null;
    }

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Customer</th>
                        <td>{customer.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{customer.address}</td>
                    </tr>
                </tbody>
            </Table>
            <h6 scope="row" colSpan="2">Customer Ticket Info</h6>
            {customer.serviceTickets.map((t) => (
                <>
                    <h6>{`Ticket-${t.id}`}</h6>
                        <ul>
                            <li>{`Customer Ticket ${t.id}`}</li>
                            <li>{`Description- ${t.description}`}</li>
                            <li>{`Emergency-${t.emergency ? "yes" : "no"}`}</li>
                            <li>{t.dateCompleted?.split("T")[0] || "Incomplete"}</li>
                        </ul>
                </>
            ))}
        </>
    );
}