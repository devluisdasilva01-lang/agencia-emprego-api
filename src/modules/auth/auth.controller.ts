import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { RegistrarRequestDto } from './dto/registrar_request.dto';


@Controller('auth')
export class AuthController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    @Post("/registrar")
    async registrar(@Body() request: RegistrarRequestDto): Promise<void> {
        await this.usuarioService.addUsuario(request)
    }

    @Post("/logar")
    async autenticar(): Promise<void> {}
}
