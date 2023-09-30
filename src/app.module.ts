import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AssetsModule } from './assets/assets.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    UsersModule,
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
