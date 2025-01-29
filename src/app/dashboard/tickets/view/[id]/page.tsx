'use client'

import { useParams  } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import intTicket from "@/interfaces/tickets";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PartyPopper, TicketX } from "lucide-react";

export default function ViewTicket () {

  const { id } = useParams();

  const [ticket, setTicket] = useState<intTicket>();

  useEffect(() => {
    if (id) {
      axios.get(`/mocks/ticketsData.json`)
        .then((res) => {
          const data : intTicket[] = res.data;
          const foundTicket = data.find(item => item.id.toString() === id);
          setTicket(foundTicket);
      })
        .catch((err) => console.error("Erro ao buscar ticket:", err));
    }
  }, [id]);

  return (
   <Card className="w-full max-w-[800px] m-auto mt-20">
      <CardHeader className="flex flex-row place-content-between">
        <h2 className="text-[20px]">{ticket?.title}</h2>
        <CardTitle className="text-[30px]">Ticket #{ticket?.id}</CardTitle>
      </CardHeader>

      <CardContent>
        <Textarea value={ticket?.content} readOnly className="h-[200px] resize-none"/>

        {ticket?.state === 1 && <div className="w-full text-right">
          <Button className="mt-5 text-[15px]">
            Iniciar Ticket
          </Button>
        </div>}

        {ticket?.state === 4 && <div className="w-full text-right">
          <Button className="mt-5 text-[15px] mr-5">
            Finalizar Ticket
          </Button>

          <Button className="mt-5 text-[15px] bg-[#f56565]">
            Cancelar Ticket
          </Button>
        </div>}

        {ticket?.state === 2 &&<h1 className="text-[30px] text-right mt-5 flex items-center justify-end gap-5 underline">
          <PartyPopper/>
          Finalizado
          <PartyPopper/>
        </h1>}

        {ticket?.state === 3 &&<h1 className="text-[30px] text-right mt-5 flex items-center justify-end gap-5 underline">
          <TicketX/>
          Cancelado
          <TicketX/>
        </h1>}
      </CardContent>
    </Card>
  )
}