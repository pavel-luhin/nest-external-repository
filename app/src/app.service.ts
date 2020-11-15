import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {AppRepository} from "./app.repository";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(AppRepository)
      private readonly repository: AppRepository
  ) {
  }
}
