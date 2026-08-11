import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsuarioAtual } from 'src/decorator/usuario_atual';
import { AuthGuard } from 'src/guards/auth_guard';

@UseGuards(AuthGuard)
@Controller('usuario')
export class UsuarioController {

    @Get("/me")
    async perfil(@UsuarioAtual("sub") usuarioId: string): Promise<void> {

        console.log("***** ", usuarioId)
        
    }
}
