import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { RegistrarRequestDto } from './dto/registrar_request.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    async registrarUsuario(request: RegistrarRequestDto ): Promise<void> {
        await this.usuarioService.addUsuario(request)
    }

    async autenticarUsuario(data: {email: string, senha: string}): Promise<{token: string}> {
        const usuario = await this.usuarioService.buscarUsuarioPorEmail(data.email)
        if(!usuario) throw new BadRequestException("Usuário não encontrado!")
        
        const validarSenha = await bcrypt.compare(data.senha, usuario.senha)
        if(!validarSenha) throw new BadRequestException("Usuário ou senha inválidos!")
            
        return {token: "token_temporario"}
    }
}
