import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppRepository} from "./app.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      schema: 'public',
      host: 'localhost',
      port: 5432,
      username: 'app',
      password: 'pgpass',
      database: 'app',
      synchronize: false,
      dropSchema: false,
      logging: process.env.LOG_QUERIES === 'true',
      entities: [`dist/**/*.entity{.ts,.js}`],
      migrations: [`dist/migration/**/*{.ts,.js}`],
      cli: {
        migrationsDir: 'src/migration',
      },
      subscribers: [`dist/subscriber/**/*{.ts,.js}`],
    }),
      TypeOrmModule.forFeature([AppRepository])
  ],
  providers: [AppService],
})
export class AppModule {}
