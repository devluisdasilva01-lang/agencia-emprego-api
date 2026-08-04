import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseOptions } from './config/datasource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseOptions()
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
