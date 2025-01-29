'use client'

import TicketTable from "@/components/ticket-table";
import intTicket from "@/interfaces/tickets";
import axios from "axios";
import { useEffect, useState } from "react";

export default function InProgressTickets () {
  const [ticketsData, setTicketsData] = useState<intTicket[]>();

    function getData() {
        axios.get('/mocks/ticketsData.json').then((res) => {
            const data : intTicket[] = res.data;
            setTicketsData(data.filter(item => item.state === 4));
        })
    }

    useEffect(() => {getData()}, []);

    return(
        <div className="text-center flex flex-col mx-[50px]">
            <h1 className="text-[50px] mb-8">Tickets Em progresso</h1>
            <TicketTable data={ticketsData}/>
        </div>
    )
}