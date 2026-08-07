import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import { RegistrarResquestDto } from '../auth/dto/registrar_request.dto';

@Injectable()
export class UsuarioService {}
