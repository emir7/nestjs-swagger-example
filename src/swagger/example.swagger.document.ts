import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

import { ExampleModule } from '../example/example.module';

export class ExampleSwaggerDocument {
  public static registerSwaggerRoute(app: INestApplication): void {
    const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle('Example API')
      .setDescription('example description')
      .setVersion('1.0.0')
      .addTag('Example API')
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      include: [ExampleModule],
    });

    SwaggerModule.setup('/docs/example', app, document);
  }
}
