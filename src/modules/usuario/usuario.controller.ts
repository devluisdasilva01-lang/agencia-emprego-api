import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsuarioAtual } from 'src/decorator/usuario_atual';
import { AuthGuard } from 'src/guards/auth_guard';
import { UsuarioService } from './usuario.service';
import { UsuarioResponseDto } from './dto/usuario_response.dto';

@UseGuards(AuthGuard)
@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    @Get("/me")
    async perfil(@UsuarioAtual("sub") usuarioId: string): Promise<UsuarioResponseDto | null> {
        return await this.usuarioService.buscarUsuarioPorId(usuarioId)
    }
}
