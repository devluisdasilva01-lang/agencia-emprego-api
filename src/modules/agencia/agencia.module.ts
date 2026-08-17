import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenciaController } from './agencia.controller';
import { AgenciaService } from './agencia.service';
import { AgenciaModel } from './agencia.model';

@Module({
  imports: [TypeOrmModule.forFeature([AgenciaModel])],
  controllers: [AgenciaController],
  providers: [AgenciaService]
})
export class AgenciaModule {} 
