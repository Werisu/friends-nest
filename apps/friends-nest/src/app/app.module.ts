import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

//NOME DA INSTÂNCIA SQLEXPRESS01: Server=localhost\SQLEXPRESS01;Database=master;Trusted_Connection=True;
// ADMINISTRADORES SQL WELLYSSON-ERGON\welly: C:\Program Files\Microsoft SQL Server\160\Setup Bootstrap\Log\20241218_130802
// id DA INSTÂNCIA: MSSQL16.SQLEXPRESS01
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'WELLYSSON-ERGON', // Nome do host ou máquina
      port: 1433, // Porta padrão
      username: 'sa', // Usuário de autenticação
      password: 'Well#34125234',
      database: 'friends', // Nome do banco de dados
      extra: {
        trustServerCertificate: true, // Aceitar certificado SSL, se necessário
        integratedSecurity: true, // Habilita autenticação integrada do Windows
      },
      options: {
        encrypt: false, // Ajuste para conexões seguras
        instanceName: 'SQLEXPRESS', // Nome da instância do SQL Server
      },
      synchronize: true, // Apenas para desenvolvimento (gera automaticamente tabelas)
      autoLoadEntities: true, // Carrega automaticamente as entidades
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
