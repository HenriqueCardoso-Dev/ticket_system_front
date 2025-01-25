'use client'

import TicketTable from "@/components/ticket-table";
import intTicket from "@/interfaces/tickets";
import axios from "axios";
import { useEffect, useState } from "react";

const CanceledTickets = () => {

    const [cancelTicketsList, setCancelTicketsList] = useState<intTicket[]>();

    function getData() {
        axios.get('/mocks/ticketsData.json').then((res) => {
            setCancelTicketsList(res.data);
        })
    }

    useEffect(() => {getData()}, []);

    return(
        <div className="text-center flex flex-col mx-[50px]">
            <h1 className="text-[50px] mb-8">Tickets Cancelados</h1>
            <TicketTable data={cancelTicketsList?.filter(item => item.state === 3)}/>
        </div>
    )
}

export default CanceledTickets;