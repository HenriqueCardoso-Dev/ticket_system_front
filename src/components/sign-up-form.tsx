import { Label } from "@radix-ui/react-label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignUpForm = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={cn("flex flex-col container max-w-3xl mx-auto mt-24", className)} {...props}>
            <Card className="">
                <CardHeader>
                <CardTitle className="text-2xl text-center">Registre-se</CardTitle>
                <CardDescription className="text-center">
                    Preencha os campos abaixo e crie sua conta:
                </CardDescription>
                </CardHeader>
                <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Nome completo:</Label>
                            <Input
                            id="fullname"
                            type="text"
                            placeholder="NOME COMPLETO"
                            required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email_confirmed">Confirme seu Email</Label>
                            <Input
                            id="email_confirmed"
                            type="email"
                            placeholder="m@example.com"
                            required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            <Label htmlFor="password">Senha:</Label>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            <Label htmlFor="password_confirmed">Confirme sua senha:</Label>
                            </div>
                            <Input id="password_confirmed" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Registrar-se
                        </Button>
                    </div>
                </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUpForm;