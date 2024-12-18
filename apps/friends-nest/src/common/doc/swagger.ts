import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function setupSwagger(app: INestApplication, environment: string) {
  if (environment !== 'development') {
    return;
  }
  // document options
  const options = new DocumentBuilder()
    .setTitle('friends-nest')
    .setDescription('The friends-nest API description')
    .setVersion('1.0')
    .build();
  // document
  const document = SwaggerModule.createDocument(app, options);
  // document
  SwaggerModule.setup('api', app, document);
}
