import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../common/config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

//NOME DA INSTÂNCIA SQLEXPRESS01: Server=localhost\SQLEXPRESS01;Database=master;Trusted_Connection=True;
// ADMINISTRADORES SQL WELLYSSON-ERGON\welly: C:\Program Files\Microsoft SQL Server\160\Setup Bootstrap\Log\20241218_130802
// id DA INSTÂNCIA: MSSQL16.SQLEXPRESS01
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeormConfig>) => config,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
