import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

//NOME DA INSTÂNCIA SQLEXPRESS01: Server=localhost\SQLEXPRESS01;Database=master;Trusted_Connection=True;
// ADMINISTRADORES SQL WELLYSSON-ERGON\welly: C:\Program Files\Microsoft SQL Server\160\Setup Bootstrap\Log\20241218_130802
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'WELLYSSON-ERGON', // ou o seu host correto
      port: 1433,
      username: 'sa',
      password: 'Well#34125234', // senha que você configurou
      database: 'friends',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
      logger: 'file',
      extra: {
        trustServerCertificate: true, // Se necessário
        encrypt: true, // Caso precise de criptografia
        enableArithAbort: true, // Pode ser necessário dependendo da versão do SQL Server
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
