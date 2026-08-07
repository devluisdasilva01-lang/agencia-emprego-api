import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegistrarResquestDto {

    @IsNotEmpty({message: "Campo nome não pode ser nulo!"})
    nome: string

    @IsNotEmpty({message: "Campo email não pode ser nulo!"})
    @IsEmail({},{message: "Email inválido!"})
    email: string

    @IsNotEmpty({message: "Campo senha não pode ser nulo!"})
    @MinLength(6)
    senha: string
}