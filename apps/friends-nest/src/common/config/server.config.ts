import { registerAs } from '@nestjs/config';
import { SERVER_CONFIG } from '../constants';
import { ServerConfigInterface } from '../interfaces';

export const serverConfig = registerAs(
  SERVER_CONFIG,
  (): ServerConfigInterface => ({
    api: '',
    environment: process.env.NODE_ENV ?? 'development',
    port:
      'string' === typeof process.env.PORT ? parseInt(process.env.PORT) : 3001,
    cors: {
      origin: process.env.CORS_ORIGIN
        ? process.env.CORS_ORIGIN
        : 'http://localhost:3000',
    },
  })
);
