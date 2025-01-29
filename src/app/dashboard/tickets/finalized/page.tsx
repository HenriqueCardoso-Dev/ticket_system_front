'use client'

import TicketTable from "@/components/ticket-table";
import intTicket from "@/interfaces/tickets";
import axios from "axios";
import { useEffect, useState } from "react";

const FinalizedTickets = () => {

    const [ticketsData, setTicketsData] = useState<intTicket[]>();

    function getData() {
        axios.get('/mocks/ticketsData.json').then((res) => {
            const data : intTicket[] = res.data;
            setTicketsData(data.filter(item => item.state === 2));
        })
    }

    useEffect(() => {getData()}, []);

    return(
        <div className="text-center flex flex-col mx-[50px]">
            <h1 className="text-[50px] mb-8">Tickets Finalizados</h1>
            <TicketTable data={ticketsData}/>
        </div>
    )
}

export default FinalizedTickets;