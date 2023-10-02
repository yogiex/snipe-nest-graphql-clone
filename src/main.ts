import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSwagger = new DocumentBuilder()
  .setTitle('Asset Management Documentation')
  .setDescription('Dokumentasi untuk graphql')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
  
  const configCustomSwagger: SwaggerCustomOptions = {
    swaggerOptions: { docExpantion: "none"}
  }
  const doc = SwaggerModule.createDocument(app,configSwagger)
  SwaggerModule.setup('doc',app,doc, configCustomSwagger)

  await app.listen(3000);
}
bootstrap();
