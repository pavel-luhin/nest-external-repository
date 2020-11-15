import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {AppRepository} from "./app.repository";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AppService {

  constructor(
      @InjectRepository(AppRepository)
      private readonly repository: AppRepository
  ) {
  }
}
