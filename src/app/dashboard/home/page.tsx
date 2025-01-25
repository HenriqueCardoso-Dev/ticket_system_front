'use client'
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import intTicket from "@/interfaces/tickets";
import { useEffect, useState } from "react";

const DashboardHome = () => {

    const [ticketsData, setTicketsData] = useState<intTicket[]>();

    function getTicketData() {
        axios.get("/mocks/ticketsData.json").then((resp) => {
            return setTicketsData(resp.data);
        });
    }

    useEffect(() => {getTicketData()}, []);

    return(
        <section className='grid grid-cols-2 gap-8 p-5'>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-left">Tickets em Aberto</CardTitle>
                </CardHeader>
                <CardContent>
                    <h1 className="text-[100px] text-right mr-5">
                        {ticketsData?.filter(item => item.state === 1).length || 0}
                    </h1>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-left">Tickets Finalizados</CardTitle>
                </CardHeader>
                <CardContent>
                    <h1 className="text-[100px] text-right mr-5">
                        {ticketsData?.filter(item => item.state === 2).length || 0}
                    </h1>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-left">Tickets Cancelados</CardTitle>
                </CardHeader>
                <CardContent>
                    <h1 className="text-[100px] text-right mr-5">
                        {ticketsData?.filter(item => item.state === 3).length || 0}
                    </h1>
                </CardContent>
            </Card>
        </section>
    )
}

export default DashboardHome;