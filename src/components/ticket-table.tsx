'use client'

import intTicket from "@/interfaces/tickets";
import React from "react";
import './styles/table.scss'
import { useRouter } from "next/navigation";

interface TicketTableProps {
  data: intTicket[] | undefined
}

const tableTitles = [
  { title: "Ticket ID" },
  { title: "Situação" },
  { title: "Título" },
  { title: "ID Usuário" },
  { title: "Criado em" },
  { title: "Urgência" }
];

const TicketTable: React.FC<TicketTableProps> = ({ data }) => {

  const router = useRouter();

  const goToView = (ticket: intTicket) => {
    router.push(`/dashboard/tickets/view/${ticket.id}`);
  }
  
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
            <tr key={index} onClick={() => goToView(ticket)} className="cursor-pointer">
              <td key={index+ticket.title+ticket.creationDatetime}>{ticket.id}</td>
              <td key={index+ticket.title+ticket.creationDatetime}>{
              ticket.state === 1 && "Em Aberto"
              || ticket.state === 2 && "Finalizado"
              || ticket.state === 3 && "Cancelado"
              || ticket.state === 4 && "Em Progresso"

              }</td>
              <td key={index+ticket.title+ticket.creationDatetime} className="max-w-[800px] truncate">{ticket.title}</td>
              <td key={index+ticket.title+ticket.creationDatetime}>{ticket.createByUserId}</td>
              <td key={index+ticket.title+ticket.creationDatetime}>{ticket.creationDatetime}</td>
              <td key={index+ticket.title+ticket.creationDatetime}>{
                ticket.urgency === 1 && "Normal"
                || ticket.urgency === 2 && "Alta"
                || ticket.urgency === 3 && "Urgente"
              }</td>
            </tr>
          ))}
        </>}
        {data?.length === 0  && <h1 className="text-sm text-left p-2">nenhum ticket aqui</h1>}
      </tbody>
    </table>
  );
};

export default TicketTable;