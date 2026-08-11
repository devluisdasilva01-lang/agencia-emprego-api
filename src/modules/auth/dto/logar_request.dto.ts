import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LogarRequestDto {

    @IsEmail({}, {message: "Email inválido!"})
    @IsNotEmpty({message: "Campo email orbrigatório!"})
    email: string 

    @IsNotEmpty({message: "Campo senha orbrigatório!"})
    @MinLength(6)
    senha: string
    
}