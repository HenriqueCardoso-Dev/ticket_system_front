import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CreateTicketForm() {

  return(
    <Card className="max-w-[800px] w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Novo Ticket
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="grid gap-2 w-full">
                <Label htmlFor="title">Título:</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Lorem ipsum"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="title">Urgência:</Label>

                <Select required>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione a Urgência" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Normal</SelectItem>
                    <SelectItem value="2">Alta</SelectItem>
                    <SelectItem value="3">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="content">Conteúdo:</Label>
              </div>
              <Textarea placeholder="Descreva os detalhes do seu ticket aqui..." id="content" required/>
            </div>
            <Button type="submit" className="w-full">
              Enviar Ticket
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}