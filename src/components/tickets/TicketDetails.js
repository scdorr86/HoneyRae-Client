import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getServiceTicket, getServiceTicketById } from "../../data/serviceTicketsData";
import { AssignEmployee } from "./AssignBtn";

export default function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
    const getTicket = () => {
        getServiceTicketById(id).then(setTicket);
    };

    useEffect(() => { getTicket(); }, [id]);
    console.log("this is the ticket", ticket);
  if (!ticket) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{ticket.customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{ticket.description}</td>
        </tr>
        <tr>
          <th scope="row">Emergency</th>
          <td>{ticket.emergency ? "yes" : "no"}</td>
        </tr>
        <tr>
          <th scope="row">Employee</th>
          <td><AssignEmployee ticketObj={ticket}></AssignEmployee></td>          
        </tr>
        <tr>
          <th scope="row">Completed?</th>
          <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
        </tr>
      </tbody>
    </Table>
  );
}
