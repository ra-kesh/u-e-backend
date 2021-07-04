import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResturantsModule } from './resturants/resturants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'devlopment' ? '.devlopment.env' : '.test.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('devlopment', 'production', 'test')
          .required(),
        DB_HOST: Joi.string(),
        DB_PORT: Joi.string(),
        DB_USERNAME: Joi.string(),
        DB_PWD: Joi.string(),
        DB_NAME: Joi.string(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ResturantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
