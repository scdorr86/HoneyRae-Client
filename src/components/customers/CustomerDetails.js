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
                <th scope="row" colSpan="4">Customer Ticket Info</th>
                <th scope="row" colSpan="4"></th>
                {customer.serviceTickets.map((t) => (
                    <tr key={`ticket-${t.id}`}>
                        <th scope="row">{`Customer Ticket ${t.id}`}</th>
                        <td>{`Description- ${t.description}`}</td>
                        <td>{`Emergency-${t.emergency ? "yes" : "no"}`}</td>
                        <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}