import intTicket from "@/interfaces/tickets";
import React from "react";
import './styles/table.scss'

interface TicketTableProps {
  data: intTicket[] | undefined
}

const tableTitles = [
  { title: "Ticket ID" },
  { title: "Conteúdo" },
  { title: "ID Usuário" },
  { title: "Criado em" }
];

const TicketTable: React.FC<TicketTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((col, index) => (
            <th key={index+col.title}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data !== undefined && <>
          {data.map((ticket, index) => (
            <tr key={index}>
              <td key={index+ticket.content+ticket.creationDatetime}>{ticket.id}</td>
              <td key={index+ticket.content+ticket.creationDatetime} className="max-w-[800px] truncate">{ticket.content}</td>
              <td key={index+ticket.content+ticket.creationDatetime}>{ticket.createByUserId}</td>
              <td key={index+ticket.content+ticket.creationDatetime}>{ticket.creationDatetime}</td>
            </tr>
          ))}
        </>}
      </tbody>
    </table>
  );
};

export default TicketTable;