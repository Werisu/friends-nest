import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig = registerAs(
  'TYPEORM_MODULE_CONFIG',
  (): TypeOrmModuleOptions => ({
    type: 'mssql',
    host: 'WELLYSSON-ERGON', // Nome do host ou máquina
    port: 1433, // Porta padrão
    username: 'sa', // Usuário de autenticação
    password: 'Root$2024',
    database: 'friends', // Nome do banco de dados
    migrationsRun:
      'string' === typeof process.env.DATABASE_MIGRATIONS_RUN
        ? process.env.DATABASE_MIGRATIONS_RUN === 'true'
        : false, // Caminho das migrações
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Entidades do banco de dados
    subscribers: [],
    extra: {
      trustServerCertificate: true, // Aceitar certificado SSL, se necessário
      integratedSecurity: true, // Habilita autenticação integrada do Windows
    },
    options: {
      encrypt: false, // Ajuste para conexões seguras
      instanceName: 'SQLEXPRESS01', // Nome da instância do SQL Server
    },
    synchronize:
      'string' === typeof process.env.DATABASE_SYNCHRONIZE
        ? process.env.DATABASE_SYNCHRONIZE === 'true'
        : true, // Apenas para desenvolvimento (gera automaticamente tabelas)
    autoLoadEntities: true, // Carrega automaticamente as entidades
    logger: 'file',
    logging: true,
  })
);
