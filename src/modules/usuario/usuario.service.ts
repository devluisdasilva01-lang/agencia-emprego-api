import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import { RegistrarRequestDto } from '../auth/dto/registrar_request.dto';
import bcrypt from 'bcrypt';


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioModel) 
        private readonly usuarioRepository: Repository<UsuarioModel>
    ) {}

    async addUsuario(request: RegistrarRequestDto): Promise<void> {
        const usuario = await this.buscarUsuarioPorEmail(request.email)

        if(usuario) throw new BadRequestException("Usuário já cadastrado no sistema!")

        const hashed = await bcrypt.hash(request.senha,12)
        await this.usuarioRepository.save({
            nome: request.nome,
            email: request.email,
            senha: hashed,
            ativo: true,
            urlFoto: 'default.png',
            dataCadastro: new Date()
        }) 
    }

    async buscarUsuarioPorEmail(email: string): Promise<UsuarioModel | null> {
        return await this.usuarioRepository.findOneBy({email})
    }
    
}
