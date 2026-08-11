import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LogarRequestDto {

    @IsEmail({}, {message: "Email inválido!"})
    @IsNotEmpty({message: "Campo email obrigatório!"})
    email: string 

    @IsNotEmpty({message: "Campo senha obrigatório!"})
    @MinLength(6)
    senha: string

}