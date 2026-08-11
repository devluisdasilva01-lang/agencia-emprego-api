import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { RequisicaoAutenticada } from "src/guards/auth_guard";

export const UsuarioAtual =  createParamDecorator(
    (propriedade: string | undefined, context: ExecutionContext) => {
        const requisicao = context.switchToHttp().getRequest<RequisicaoAutenticada>()

        const usuario = requisicao.usuario

        return propriedade ? usuario?.[propriedade as keyof typeof usuario] : usuario 
    }
)