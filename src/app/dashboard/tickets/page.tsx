'use client'

import TicketTable from "@/components/ticket-table";
import intTicket from "@/interfaces/tickets";
import axios from "axios";
import { useEffect, useState } from "react";

const OpenTickets = () => {

    const [openTicketsList, setOpenTicketsList] = useState<intTicket[]>();

    function getData() {
        axios.get('/mocks/ticketsData.json').then((res) => {
            setOpenTicketsList(res.data);
        })
    }

    useEffect(() => {getData()}, []);

    return(
        <div className="text-center flex flex-col mx-[50px]">
            <h1 className="text-[50px] mb-8">Tickets Em Aberto</h1>
            <TicketTable data={openTicketsList?.filter(item => item.state === 1)}/>
        </div>
    )
}

export default OpenTickets;