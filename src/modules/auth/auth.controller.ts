import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarRequestDto } from './dto/registrar_request.dto';
import { AuthService } from './auth.service';
import { LogarRequestDto } from './dto/logar_request.dto';


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post("/registrar")
    async registrar(@Body() request: RegistrarRequestDto): Promise<void> {
        await this.authService.registrarUsuario(request)
    }

    @Post("/logar")
    async autenticar(@Body() request: LogarRequestDto): Promise<{token: string}> {
        return await this.authService.autenticarUsuario(request)
    }
}
