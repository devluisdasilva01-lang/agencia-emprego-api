import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';


export interface UsuarioAutenticado {
    sub: string
}

export interface RequisicaoAutenticada extends Request {
    usuario: UsuarioAutenticado
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService 
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requisicao =  context. switchToHttp().getRequest<RequisicaoAutenticada>()

        const token = this.extrairToken(requisicao)

        if(!token) 
            throw new UnauthorizedException("Token inválido ou expirado!")
        try {
            const payload = await this.jwtService.verifyAsync<UsuarioAutenticado>(token)

            requisicao.usuario = payload
            return true

        } catch (error) {
            throw new UnauthorizedException("Token inválido ou expirado!")
        }

    }

    private extrairToken(requisicao: Request) {
        const [tipo, token] = requisicao.headers.authorization?.split(" ") ?? []
        
        return tipo === "Bearer" ? token : undefined 
    }
}
