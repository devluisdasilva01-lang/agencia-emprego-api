import { Module } from '@nestjs/common';
import { AgenciaController } from './agencia.controller';
import { AgenciaService } from './agencia.service';

@Module({
  controllers: [AgenciaController],
  providers: [AgenciaService]
})
export class AgenciaModule {} 
