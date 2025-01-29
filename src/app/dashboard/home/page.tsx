'use client'
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import intTicket from "@/interfaces/tickets";
import { useEffect, useState } from "react";
import Link from 'next/link';

const DashboardHome = () => {

    const [ticketsData, setTicketsData] = useState<intTicket[]>();

    function getTicketData() {
        axios.get("/mocks/ticketsData.json").then((resp) => {
            return setTicketsData(resp.data);
        });
    }

    useEffect(() => {getTicketData()}, []);

    return(
        <section>

            <Card className='w-full border-none'>
                <CardHeader>
                    <CardTitle className="text-5xl text-left">Tickets</CardTitle>
                </CardHeader>

                <CardContent className='grid grid-cols-2 gap-8 p-5'>
                    <Link href="tickets">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-left">Em Aberto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h1 className="text-[100px] text-right mr-5">
                                    {ticketsData?.filter(item => item.state === 1).length || 0}
                                </h1>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="tickets/finalized">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-left">Finalizados</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h1 className="text-[100px] text-right mr-5">
                                    {ticketsData?.filter(item => item.state === 2).length || 0}
                                </h1>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="tickets/canceled">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-left">Cancelados</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h1 className="text-[100px] text-right mr-5">
                                    {ticketsData?.filter(item => item.state === 3).length || 0}
                                </h1>
                            </CardContent>
                        </Card>
                    </Link>
                </CardContent>
            </Card>

        </section>
    )
}

export default DashboardHome;