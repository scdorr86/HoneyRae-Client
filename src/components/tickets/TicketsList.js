import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";
import { DeleteTicket } from "./DeleteTicket";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);


  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
                <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
                    <DeleteTicket ticketObj={t} setTickets={setTickets}></DeleteTicket>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
